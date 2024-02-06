---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Retorna a coleção de esquema para uma fonte de dados do ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna a coleção de esquema da fonte de dados ADO.NET com o nome de provedor <code>providerName</code> e a cadeia de conexão <code>connectionString</code>. <code>connectionString</code> pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Um valor l&#243;gico (true/false) que determina se as op&#231;&#245;es de cadeia de conex&#227;o compat&#237;veis com o SQL Server devem ser produzidas para a autentica&#231;&#227;o do Windows. O valor padr&#227;o &#233; true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
