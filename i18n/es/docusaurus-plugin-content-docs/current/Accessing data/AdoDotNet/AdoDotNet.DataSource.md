---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Devuelve la colección de esquema para un origen de datos de ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Devuelve la colección de esquema para el origen de datos de ADO.NET con el nombre de proveedor <code>providerName</code> y la cadena de conexión <code>connectionString</code>. <code>connectionString</code> puede ser texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : L&#243;gica (true/false) que determina si se producen opciones de cadena de conexi&#243;n compatibles con SQL Server para la autenticaci&#243;n de Windows. El valor predeterminado es &quot;true&quot;.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
