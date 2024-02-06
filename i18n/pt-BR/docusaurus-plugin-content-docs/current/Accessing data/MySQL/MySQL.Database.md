---
title: MySQL.Database
---

# MySQL.Database


Retorna uma tabela de tabelas, exibições e funções escalares armazenadas do SQL disponíveis em um banco de dados MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas, exibições e funções escalares armazenadas do SQL disponíveis em um banco de dados MySQL, no servidor <code>server</code>, na instância de banco de dados chamada <code>database</code>. Como alternativa, a porta pode ser especificada com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul><li><code>Encoding</code> : Um valor de TextEncoding que especifica o conjunto de caracteres usado para codificar todas as consultas enviadas ao servidor (o padr&#227;o &#233; nulo).</li><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o usada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>Query</code> : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir v&#225;rios conjuntos de resultados, somente o primeiro ser&#225; retornado.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o depende do driver.</li><li><code>TreatTinyAsBoolean</code> : Uma l&#243;gica (true/false) que determina se ser&#225; necess&#225;rio for&#231;ar as colunas tinyint no servidor como valores l&#243;gicos. O valor padr&#227;o &#233; true.</li><li><code>OldGuids</code> : Uma l&#243;gica (true/false) que define se as colunas char(36) (em caso de false) ou binary(16) (em caso de true) ser&#227;o tratadas como GUIDs. O valor padr&#227;o &#233; false.</li><li><code>ReturnSingleDatabase</code> : Uma l&#243;gica (true/false) que define se todas as tabelas de todos os banco de dados ser&#227;o retornadas (em caso de false) ou se as tabelas e visualiza&#231;&#245;es do banco de dados especificado ser&#227;o retornadas (em caso de true). O valor padr&#227;o &#233; false.</li><li><code>HierarchicalNavigation</code> : Um l&#243;gica (true/false) que define se as tabelas agrupadas por seus nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; false).</li></ul>    O parâmetro de registro é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.    



## Category
Accessing data
