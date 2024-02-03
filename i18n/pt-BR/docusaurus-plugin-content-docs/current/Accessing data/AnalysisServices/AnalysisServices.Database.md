---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Retorna uma tabela de cubos multidimensionais ou modelos de tabela do banco de dados do Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de cubos multidimensionais ou modelos tabulares do banco de dados <code>database</code> do Analysis Services no servidor <code>server</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul><li><code>Query</code> : Uma consulta MDX nativa usada para recuperar dados.</li><li><code>TypedMeasureColumns</code> : Um valor l&#243;gico que indica se os tipos especificados no modelo multidimensional ou tabular ser&#227;o usados para os tipos das colunas de medi&#231;&#227;o adicionadas. Quando definido como false, o tipo &quot;number&quot; ser&#225; usado para todas as colunas de medi&#231;&#227;o. O valor padr&#227;o para essa op&#231;&#227;o &#233; false.</li><li><code>Culture</code> : Um nome de cultura que especifica a cultura para os dados. Isso corresponde &#224; propriedade da cadeia de conex&#227;o &#39;ID de Localidade&#39;.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o depende do driver.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o depende do driver.</li><li><code>SubQueries</code> : Um n&#250;mero (0, 1 ou 2) que define o valor da propriedade &quot;SubQueries&quot; na cadeia de conex&#227;o. Essa op&#231;&#227;o controla o comportamento de membros calculados em subsele&#231;&#245;es ou subcubos. (O valor padr&#227;o &#233; 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
