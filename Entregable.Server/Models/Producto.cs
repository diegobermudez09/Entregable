using System;
using System.Collections.Generic;

namespace Entregable.Server;

public partial class Producto
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public decimal? Precio { get; set; }
}
