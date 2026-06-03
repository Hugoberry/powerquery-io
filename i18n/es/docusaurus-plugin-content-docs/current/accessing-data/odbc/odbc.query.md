---
title: Odbc.Query
---

# Odbc.Query


Devuelve el resultado de ejecutar una consulta nativa en un origen de datos de ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devuelve el resultado de ejecutar `query` con la cadena de conexión `connectionString` mediante ODBC. `connectionString` puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es de 15 segundos.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `SqlCompatibleWindowsAuth` : Lógica (true/false) que determina si se producen opciones de cadena de conexión compatibles con SQL Server para la autenticación de Windows. El valor predeterminado es "true".


## Examples

### Example #1
Permite devolver el resultado de ejecutar una consulta simple en la cadena de conexión proporcionada.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
