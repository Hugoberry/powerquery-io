---
title: SapHana.Database
---

# SapHana.Database


Devolve paquetes nunha base de datos SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de paquetes multidimensionais a partir da base de datos SAP HANA `server`. Pode especificarse un parámetro de rexistro opcional, `options`, para controlar as seguintes opcións:

-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `Distribution` : Unha SapHanaDistribution que establece o valor da propiedade "Distribution" na cadea de conexión. O encamiñamento de instrucións é o método empregado para avaliar o nodo de servidor axeitado dun sistema distribuído antes da execución da instrución. O valor predefinido é SapHanaDistribution.All.
-   `Implementation` : Especifica a implantación do conector SAP HANA que se usará.
-   `EnableColumnBinding` : Vincula as variables ás columnas dun conxunto de resultados de SAP HANA ao obter datos. Pode mellorar o rendemento a costa dunha utilización lixeiramente maior da memoria. O valor predefinido é falso.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar unha tentativa de conexión co servidor. O valor predefinido é de 15 segundos.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.



## Category
Accessing data
