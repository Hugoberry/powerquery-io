---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Devolve uma tabela de cubos multidimensionais ou modelos em tabela a partir da base de dados do Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de modelos de cubos multidimensionais ou em tabela a partir da base de dados do Analysis Services <code>database</code> no servidor <code>server</code>. É possível especificar um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>Query</code> : Uma consulta de MDX nativa utilizada para obter dados.</li><li><code>TypedMeasureColumns</code> : Um valor l&#243;gico que indica se os tipos especificados no modelo multidimensional ou em tabela ser&#227;o utilizados para os tipos de colunas de medida adicionados. Quando definido como false, ser&#225; utilizado o tipo de &quot;n&#250;mero&quot; para todas as colunas de medida. O valor predefinido para esta op&#231;&#227;o &#233; false.</li><li><code>Culture</code> : Um nome de cultura a especificar a cultura para os dados. Isto corresponde &#224; propriedade de cadeia de liga&#231;&#227;o &quot;Identificador de Localiza&#231;&#227;o&quot;.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dependente do controlador.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>SubQueries</code> : Um n&#250;mero (0, 1 ou 2) que define o valor da propriedade &quot;SubQueries&quot; na cadeia de liga&#231;&#227;o. Isto controla o comportamento de membros calculados em subsele&#231;&#245;es ou subcubos. (O valor predefinido &#233; 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
