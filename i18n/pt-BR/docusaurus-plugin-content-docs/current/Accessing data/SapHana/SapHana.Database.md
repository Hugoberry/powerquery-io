---
title: SapHana.Database
---

# SapHana.Database


## Description

Retorna os pacotes em um banco de dados SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela de pacotes multidimensionais do banco de dados SAP HANA <code>server</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as opções a seguir:    <ul><li><code>Query</code> : Uma consulta SQL nativa usada para recuperar dados. Se a consulta produzir v&#225;rios conjuntos de resultados, somente o primeiro ser&#225; retornado.</li><li><code>Distribution</code> : Uma SapHanaDistribution que define o valor da propriedade &quot;Distribution&quot; na cadeia de conex&#227;o. O roteamento de instru&#231;&#227;o &#233; o m&#233;todo para avaliar o n&#243; de servidor correto de um sistema distribu&#237;do antes da execu&#231;&#227;o da instru&#231;&#227;o. O valor padr&#227;o &#233; SapHanaDistribution.All.</li><li><code>Implementation</code> : Especifica a implementa&#231;&#227;o do conector SAP HANA a ser usada.</li><li><code>EnableColumnBinding</code> : Vincula vari&#225;veis ​​&#224;s colunas de um conjunto de resultados do SAP HANA ao buscar dados. Pode melhorar potencialmente o desempenho ao custo de uma utiliza&#231;&#227;o de mem&#243;ria um pouco maior. O valor padr&#227;o &#233; falso.</li><li><code>ConnectionTimeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que uma tentativa de fazer uma conex&#227;o com o servidor seja abandonada. O valor padr&#227;o &#233; 15 segundos.</li><li><code>CommandTimeout</code> : Uma dura&#231;&#227;o que controla por quanto tempo a consulta do servidor tem permiss&#227;o para ser executada at&#233; que seja cancelada. O valor padr&#227;o &#233; dez minutos.</li></ul>    



## Category
Accessing data
