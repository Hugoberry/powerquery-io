---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Mithilfe dieser Funktion kann ein beliebiger der Endpunkte "Lists" aufgerufen werden, die von der SparkPost-API, Version 1, angeboten werden. Wenn Sie die SparkPost-API über diese Funktion aufrufen, denken Sie daran, dass für die SparkPost-API ein striktes API-Ratenlimit vorliegt. Wenn Ihnen vom SparkPost-Server ein Statuscode 429 zurückgegeben wird, haben Sie das Ratenlimit erreicht und müssen einige Minuten warten, bevor weitere Aufrufe möglich sind.


## Examples

### Example #1 
Gibt eine Tabelle mit einer einzelnen Spalte zurück, die mit Daten aus einem der Endpunkte &#34;Lists&#34; der SparkPost-API, Version 1, aufgefüllt sind. (Informationen finden Sie in der SparkPost-Dokumentation.)
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



