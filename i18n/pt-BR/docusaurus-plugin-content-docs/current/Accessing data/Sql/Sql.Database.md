---
title: Sql.Database
---

# Sql.Database


Retorna uma tabela de tabelas SQL, exibições e funções armazenadas do banco de dados do SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de tabelas, exibições e funções armazenadas do SQL de um banco de dados do SQL Server <code>database</code> no servidor <code>server</code>. Como alternativa, a porta pode ser especificada com o servidor, separada por uma vírgula. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul><li><code>Query</code> : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir v&#225;rios conjuntos de resultados, somente o primeiro ser&#225; retornado.</li><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o usada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li><li><code>MaxDegreeOfParallelism</code> : Um n&#250;mero que define o valor da cl&#225;usula de consulta &quot;maxdop&quot; na consulta SQL gerada.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o depende do driver.</li><li><code>HierarchicalNavigation</code> : Um l&#243;gica (true/false) que define se as tabelas agrupadas por seus nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; false).</li><li><code>MultiSubnetFailover</code> : Uma l&#243;gica (true/false) que define o valor da propriedade &quot;MultiSubnetFailover&quot; na cadeia de conex&#227;o (o padr&#227;o &#233; false).</li><li><code>UnsafeTypeConversions</code> : Uma l&#243;gica (true/false) que, se for true, tentar&#225; dobrar as convers&#245;es de tipo, o que poder&#225; falhar e causar a falha da consulta inteira. N&#227;o recomendado para uso geral.</li><li><code>ContextInfo</code> : Um valor bin&#225;rio usado para definir a CONTEXT_INFO antes de executar cada comando.</li><li><code>OmitSRID</code> : Uma l&#243;gica (true/false) que, se for true, omitir&#225; o SRID ao produzir um Texto Bem Conhecido de tipos geom&#233;tricos e geogr&#225;ficos.</li><li><code>EnableCrossDatabaseFolding</code> : Um valor l&#243;gico (verdadeiro/falso) que, se verdadeiro, permite consultar bancos de dados de hectare dobrados no mesmo servidor. O valor padr&#227;o &#233; falso.</li></ul>    O parâmetro de registro é especificado como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.    



## Category
Accessing data
