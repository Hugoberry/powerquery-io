---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Devuelve el resultado de ejecutar una consulta nativa en un origen de datos ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Devuelve el resultado de ejecutar <code>query</code> con la cadena de conexión <code>connectionString</code> mediante el proveedor de ADO.NET <code>providerName</code>. <code>connectionString</code> puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : L&#243;gica (true/false) que determina si se producen opciones de cadena de conexi&#243;n compatibles con SQL Server para la autenticaci&#243;n de Windows. El valor predeterminado es &quot;true&quot;.</li></ul>



## Category
Accessing data
