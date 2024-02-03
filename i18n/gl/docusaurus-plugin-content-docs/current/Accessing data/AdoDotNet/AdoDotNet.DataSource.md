---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Devolve a colección de esquemas dunha orixe de datos ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Devolve a colección de esquemas da orixe de datos ADO.NET co nome de fornecedor <code>providerName</code> e a cadea de conexión <code>connectionString</code>. <code>connectionString</code> pode ser texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Unha l&#243;xica (true/false) que determina se producir opci&#243;ns de cadea de conexi&#243;n compatibles con SQL Server para a autenticaci&#243;n de Windows. O valor predefinido &#233; true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
