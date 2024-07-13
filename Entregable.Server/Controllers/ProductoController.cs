using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Entregable.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly PruebaEntradaContext _dbcontext;

        public ProductoController(PruebaEntradaContext context)
        {
            _dbcontext = context; // Inyección de dependencia del contexto de la base de datos
        }

        // Método para obtener la lista de productos
        [HttpGet]
        [Route("Lista")]
        public async Task<IActionResult> Lista()
        {
            List<Producto> lista = await _dbcontext.Productos.OrderByDescending(c => c.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista); // Retorna la lista de productos con un estado 200 OK
        }

        // Método para guardar un nuevo producto
        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Producto request)
        {
            await _dbcontext.Productos.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok"); // Retorna un estado 200 OK con un mensaje "ok"
        }

        // Método para editar un producto existente
        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Producto request)
        {
            _dbcontext.Productos.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok"); // Retorna un estado 200 OK con un mensaje "ok"
        }

        // Método para eliminar un producto por id
        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Producto producto = _dbcontext.Productos.Find(id);

            _dbcontext.Productos.Remove(producto);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok"); // Retorna un estado 200 OK con un mensaje "ok"
        }
    }
}
