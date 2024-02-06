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


## Remarks

Deze functie kan worden gebruikt om een van de eindpunten Lijsten aan te roepen die worden aangeboden door de SparkPost-API v1. Wanneer u met deze functie aanroepen naar de SparkPost-API maakt, moet u er rekening mee houden dat de SparkPost-API een strikte API-tarieflimiet heeft. Als de statuscode 429 wordt geretourneerd van de SparkPost-server, hebt u de tarieflimiet bereikt en moet u enkele momenten wachten voordat u meer aanroepen kunt maken.


## Examples

### Example #1 
Hiermee wordt een tabel met één kolom geretourneerd waarin gegevens van een van de eindpunten Lijsten van SparkPost-API v1 zijn ingevuld (zie SparkPost-documentatie voor meer informatie).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



