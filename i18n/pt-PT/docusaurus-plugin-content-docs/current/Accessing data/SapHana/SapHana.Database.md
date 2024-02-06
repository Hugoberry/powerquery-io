---
title: SapHana.Database
---

# SapHana.Database


Devolve os pacotes numa base de dados SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de pacotes multidimensionais da base de dados SAP HANA <code>server</code>. É possível especificar um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>Query</code> : Uma consulta SQL nativa utilizada para obter dados. Se a consulta produz v&#225;rios conjuntos de resultados, apenas o primeiro vai ser devolvido.</li><li><code>Distribution</code> : Uma SapHanaDistribution que define o valor da propriedade &quot;Distribution&quot; na cadeia de liga&#231;&#227;o. O encaminhamento de instru&#231;&#227;o &#233; um m&#233;todo de avaliar o n&#243; de servidor correto de um sistema distribu&#237;do antes da execu&#231;&#227;o de instru&#231;&#227;o. O valor predefinido &#233; SapHanaDistribution.All.</li><li><code>Implementation</code> : Especifica a implementa&#231;&#227;o do conector de SAP HANA a utilizar.</li><li><code>EnableColumnBinding</code> : Vincula vari&#225;veis &#224;s colunas de um conjunto de resultados do SAP HANA ao obter dados. Pode potencialmente melhorar o desempenho &#224; custa de uma utiliza&#231;&#227;o de mem&#243;ria ligeiramente superior. O valor predefinido &#233; falso.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar uma tentativa de ligar ao servidor. O valor predefinido &#233; 15 segundos.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla o tempo em que a consulta do lado do servidor est&#225; autorizada a ser executada antes de ser cancelada. O valor predefinido &#233; dez minutos.</li></ul>    



## Category
Accessing data
