---
title: OleDb.Query
---

# OleDb.Query


## Description

Devuelve el resultado de ejecutar una consulta nativa en un origen de datos de OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Devuelve el resultado de ejecutar <code>query</code> con la cadena de conexión <code>connectionString</code> mediante OLE DB. <code>connectionString</code> puede ser un texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o numéricos. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los siguientes campos:    <ul><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : L&#243;gica (true/false) que determina si se producen opciones de cadena de conexi&#243;n compatibles con SQL Server para la autenticaci&#243;n de Windows. El valor predeterminado es &quot;true&quot;.</li></ul>



## Category
Accessing data
