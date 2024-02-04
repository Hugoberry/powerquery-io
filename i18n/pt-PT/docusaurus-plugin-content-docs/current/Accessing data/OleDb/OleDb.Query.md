---
title: OleDb.Query
---

# OleDb.Query


## Description

Devolve o resultado da execução de uma consulta nativa numa origem de dados OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Devolve o resultado de executar <code>query</code> com a cadeia de carateres <code>connectionString</code> com OLE DB. <code>connectionString</code> pode ser texto ou um registo de pares de valores da propriedade. Os valores da propriedade podem ser texto ou número. Poderá ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Uma l&#243;gica (true/false) que determina se &#233; para produzir op&#231;&#245;es de cadeia de liga&#231;&#227;o compat&#237;veis com o SQL Server para a autentica&#231;&#227;o Windows. O valor predefinido &#233; true.</li></ul>



## Category
Accessing data
