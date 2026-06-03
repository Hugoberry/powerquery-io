---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Returnerar en navigeringstabell som innehåller de tabeller som hittats i det angivna kontot från ett Azure-lagringsvalv.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Returnerar en navigeringstabell som innehåller en rad för varje tabell som hittas på kontowebbadressen `account` från ett Azure Storage-valv. Varje rad innehåller en länk till Azure-tabellen. Parameter för valfri post, `options`, kan tillhandahållas för ytterligare egenskaper. Posten kan innehålla följande fält:

-   `Timeout` : En varaktighet som styr hur lång tid som ska gå innan förfrågan till servern avbryts. Standardvärdet är källspecifikt.



## Category
Accessing data
