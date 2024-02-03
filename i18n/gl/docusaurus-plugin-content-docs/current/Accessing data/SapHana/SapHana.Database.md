---
title: SapHana.Database
---

# SapHana.Database


## Description

Devolve paquetes nunha base de datos SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de paquetes multidimensionais a partir da base de datos SAP HANA <code>server</code>. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul><li><code>Query</code> : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, s&#243; se devolver&#225; o primeiro.</li><li><code>Distribution</code> : Unha SapHanaDistribution que establece o valor da propiedade &quot;Distribution&quot; na cadea de conexi&#243;n. O encami&#241;amento de instruci&#243;ns &#233; o m&#233;todo empregado para avaliar o nodo de servidor axeitado dun sistema distribu&#237;do antes da execuci&#243;n da instruci&#243;n. O valor predefinido &#233; SapHanaDistribution.All.</li><li><code>Implementation</code> : Especifica a implantaci&#243;n do conector SAP HANA que se usar&#225;.</li><li><code>EnableColumnBinding</code> : Vincula as variables &#225;s columnas dun conxunto de resultados de SAP HANA ao obter datos. Pode mellorar o rendemento a costa dunha utilizaci&#243;n lixeiramente maior da memoria. O valor predefinido &#233; falso.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexi&#243;n co servidor. O valor predefinido &#233; de 15&#160;segundos.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li></ul>    



## Category
Accessing data
