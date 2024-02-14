---
title: OleDb.DataSource
---

# OleDb.DataSource


Retorna uma tabela de tabelas e visualizações SQL da fonte de dados OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela das tabelas e visualizações do SQL da fonte de dados OLE DB especificada pela cadeia de conexão <code>connectionString</code>. O <code>connectionString</code> pode ser texto ou um registro de pares de valor da propriedade. Os valores da propriedade podem ser texto ou número. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter um dos seguintes dos campos:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o usada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>Query</code> : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir v&#225;rios conjuntos de resultados, somente o primeiro ser&#225; retornado.</li><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se as tabelas agrupadas pelos respectivos nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; true).</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o depende do driver.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>SqlCompatibleWindowsAuth</code> : Um valor l&#243;gico (true/false) que determina se as op&#231;&#245;es de cadeia de conex&#227;o compat&#237;veis com o SQL Server devem ser produzidas para a autentica&#231;&#227;o do Windows. O valor padr&#227;o &#233; true.</li></ul>    O parâmetro de registro é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.



## Category
Accessing data
