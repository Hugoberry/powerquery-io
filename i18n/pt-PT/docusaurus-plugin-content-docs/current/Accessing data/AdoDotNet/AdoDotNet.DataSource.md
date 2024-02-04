---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Devolve a coleção de esquemas para uma origem de dados ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Devolve a coleção de esquemas para a origem de dados ADO.NET com o nome de fornecedor <code>providerName</code> e a cadeia de ligação <code>connectionString</code>. <code>connectionString</code> pode ser texto ou um registo de pares de valor da propriedade. Os valores da propriedade podem ser texto ou números. Poderá ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Uma l&#243;gica (true/false) que determina se &#233; para produzir op&#231;&#245;es de cadeia de liga&#231;&#227;o compat&#237;veis com o SQL Server para a autentica&#231;&#227;o Windows. O valor predefinido &#233; true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
