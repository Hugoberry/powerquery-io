---
title: OleDb.DataSource
---

# OleDb.DataSource


Devuelve una tabla de las vistas y las tablas de SQL del origen de datos OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas y vistas SQL del origen de datos OLE DB especificado por la cadena de conexión`connectionString`. `connectionString` puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, `options`, para especificar propiedades adicionales. El registro puede contener los campos siguientes:

-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.
-   `Query` : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolverá el primero.
-   `HierarchicalNavigation` : Un valor lógico (true o false) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es true).
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `SqlCompatibleWindowsAuth` : Lógica (true/false) que determina si se producen opciones de cadena de conexión compatibles con SQL Server para la autenticación de Windows. El valor predeterminado es "true".

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\] o \[Query = "select ..."\], por ejemplo.



## Category
Accessing data
