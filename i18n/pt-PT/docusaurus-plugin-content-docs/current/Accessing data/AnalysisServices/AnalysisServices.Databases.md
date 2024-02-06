---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Devolve as bases de dados do Analysis Services num anfitrião específico.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve as bases de dados numa instância do Analysis Services, <code>server</code>. Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>TypedMeasureColumns</code> : Um valor l&#243;gico que indica se os tipos especificados no modelo multidimensional ou em tabela ser&#227;o utilizados para os tipos de colunas de medida adicionados. Quando definido como false, ser&#225; utilizado o tipo de &quot;n&#250;mero&quot; para todas as colunas de medida. O valor predefinido para esta op&#231;&#227;o &#233; false.</li><li><code>Culture</code> : Um nome de cultura a especificar a cultura para os dados. Isto corresponde &#224; propriedade de cadeia de liga&#231;&#227;o &quot;Identificador de Localiza&#231;&#227;o&quot;.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dependente do controlador.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; dependente do controlador.</li><li><code>SubQueries</code> : Um n&#250;mero (0, 1 ou 2) que define o valor da propriedade &quot;SubQueries&quot; na cadeia de liga&#231;&#227;o. Isto controla o comportamento de membros calculados em subsele&#231;&#245;es ou subcubos. (O valor predefinido &#233; 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
