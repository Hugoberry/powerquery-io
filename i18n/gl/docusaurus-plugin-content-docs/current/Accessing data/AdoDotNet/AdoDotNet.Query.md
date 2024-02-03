---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Devolve o resultado de executar unha consulta nativa nunha orixe de datos ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Devolve o resultado de executar <code>query</code> coa cadea de conexión <code>connectionString</code> mediante o fornecedor de ADO.NET <code>providerName</code>. <code>connectionString</code> pode ser un texto ou un rexistro de pares de valores de propiedade. Os valores de propiedade poden ser texto ou números. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Unha l&#243;xica (true/false) que determina se producir opci&#243;ns de cadea de conexi&#243;n compatibles con SQL Server para a autenticaci&#243;n de Windows. O valor predefinido &#233; true.</li></ul>



## Category
Accessing data
