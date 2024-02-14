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

Devuelve una tabla de las vistas y las tablas de SQL del origen de datos OLE DB especificado por la cadena de conexión <code>connectionString</code>. <code>connectionString</code> puede ser un texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li><li><code>Query</code> : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolver&#225; el primero.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (true o false) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es true).</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : L&#243;gica (true/false) que determina si se producen opciones de cadena de conexi&#243;n compatibles con SQL Server para la autenticaci&#243;n de Windows. El valor predeterminado es &quot;true&quot;.</li></ul>    El parámetro de registro se especifica como [option1 = value1, option2 = value2...] o [Query = " select ..." ], por ejemplo.



## Category
Accessing data
