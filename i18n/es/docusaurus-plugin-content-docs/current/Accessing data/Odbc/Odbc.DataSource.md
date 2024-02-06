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

Devuelve una tabla de las vistas y las tablas de SQL del origen de datos ODBC especificado por la cadena de conexión <code>connectionString</code>. <code>connectionString</code> puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los campos siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado es de 15&#160;segundos.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : L&#243;gica (true/false) que determina si se producen opciones de cadena de conexi&#243;n compatibles con SQL Server para la autenticaci&#243;n de Windows. El valor predeterminado es &quot;true&quot;.</li></ul>


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
