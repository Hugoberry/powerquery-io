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

Returnerar en navigeringstabell som innehåller en rad för varje tabell som hittas på kontowebbadressen <code>account</code> från ett Azure Storage-valv. Varje rad innehåller en länk till Azure-tabellen. En valfri postparameter, <code>options</code>, kan läggas till för att ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>Timeout</code> : En varaktighet som styr hur l&#229;ng tid som ska g&#229; innan f&#246;rfr&#229;gan till servern avbryts. Standardv&#228;rdet &#228;r k&#228;llspecifikt.</li></ul>



## Category
Accessing data
