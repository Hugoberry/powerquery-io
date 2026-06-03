---
title: Odbc.DataSource
---

# Odbc.DataSource


Devuelve una tabla de las vistas y las tablas de SQL del origen de datos de ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de las vistas y las tablas de SQL del origen de datos ODBC especificado por la cadena de conexión `connectionString`. `connectionString` puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es de 15 segundos.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `SqlCompatibleWindowsAuth` : Lógica (true/false) que determina si se producen opciones de cadena de conexión compatibles con SQL Server para la autenticación de Windows. El valor predeterminado es "true".


## Examples

### Example #1
Permite devolver las tablas y vistas SQL de la cadena de conexión proporcionada.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
