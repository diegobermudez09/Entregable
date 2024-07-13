USE [master]
GO
/****** Object:  Database [pruebaEntrada]    Script Date: 13/07/2024 14:15:52 ******/
CREATE DATABASE [pruebaEntrada]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'pruebaEntrada', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\pruebaEntrada.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'pruebaEntrada_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\pruebaEntrada_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [pruebaEntrada] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [pruebaEntrada].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [pruebaEntrada] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [pruebaEntrada] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [pruebaEntrada] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [pruebaEntrada] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [pruebaEntrada] SET ARITHABORT OFF 
GO
ALTER DATABASE [pruebaEntrada] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [pruebaEntrada] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [pruebaEntrada] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [pruebaEntrada] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [pruebaEntrada] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [pruebaEntrada] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [pruebaEntrada] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [pruebaEntrada] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [pruebaEntrada] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [pruebaEntrada] SET  ENABLE_BROKER 
GO
ALTER DATABASE [pruebaEntrada] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [pruebaEntrada] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [pruebaEntrada] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [pruebaEntrada] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [pruebaEntrada] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [pruebaEntrada] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [pruebaEntrada] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [pruebaEntrada] SET RECOVERY FULL 
GO
ALTER DATABASE [pruebaEntrada] SET  MULTI_USER 
GO
ALTER DATABASE [pruebaEntrada] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [pruebaEntrada] SET DB_CHAINING OFF 
GO
ALTER DATABASE [pruebaEntrada] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [pruebaEntrada] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [pruebaEntrada] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [pruebaEntrada] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'pruebaEntrada', N'ON'
GO
ALTER DATABASE [pruebaEntrada] SET QUERY_STORE = ON
GO
ALTER DATABASE [pruebaEntrada] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [pruebaEntrada]
GO
/****** Object:  Table [dbo].[productos]    Script Date: 13/07/2024 14:15:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[productos](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](60) NULL,
	[Precio] [decimal](6, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[productos] ON 

INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (1, N'Televisor LED', CAST(299.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (2, N'Refrigerador', CAST(599.49 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (3, N'Lavadora', CAST(399.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (4, N'Microondas', CAST(89.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (5, N'Aspiradora', CAST(129.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (6, N'Cafetera', CAST(49.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (7, N'Horno eléctrico', CAST(199.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (8, N'Aire acondicionado', CAST(499.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (9, N'Plancha', CAST(29.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (10, N'Licuadora', CAST(59.99 AS Decimal(6, 2)))
INSERT [dbo].[productos] ([ID], [Nombre], [Precio]) VALUES (34, N'Refrigeradora', CAST(1399.99 AS Decimal(6, 2)))
SET IDENTITY_INSERT [dbo].[productos] OFF
GO
ALTER TABLE [dbo].[productos]  WITH CHECK ADD CHECK  (([Precio]>=(0)))
GO
USE [master]
GO
ALTER DATABASE [pruebaEntrada] SET  READ_WRITE 
GO
