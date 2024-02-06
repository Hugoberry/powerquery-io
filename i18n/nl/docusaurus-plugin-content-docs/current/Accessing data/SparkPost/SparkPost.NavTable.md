---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Haal de ingebouwde tabellen op die door de SparkPost-connector zijn vrijgegeven met gegevens die gedurende een door de gebruiker opgegeven aantal dagen zijn verzameld. Wanneer u deze tabellen vernieuwt of met deze connector een aanroep naar de SparkPost-API maakt, moet u er rekening mee houden dat de SparkPost-API een strikte API-tarieflimiet heeft. Als de statuscode 429 wordt geretourneerd van de SparkPost-server, hebt u de tarieflimiet bereikt en moet u enkele momenten wachten voordat u meer aanroepen kunt maken. Wanneer u een waarde kiest voor de parameter Aantal dagen, moet u er rekening mee houden dat de API slechts de gegevens van zes maanden opslaat.


