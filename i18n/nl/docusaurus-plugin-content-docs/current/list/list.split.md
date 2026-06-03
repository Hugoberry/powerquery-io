---
title: List.Split
---

# List.Split


Hiermee wordt de opgegeven lijst gesplitst in een lijst met lijsten met het opgegeven paginaformaat.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Hiermee wordt `list` gesplitst in een lijst met lijsten, waarbij het eerste element van de uitvoerlijst een lijst is met de eerste `pageSize` elementen uit de bronlijst, het volgende element van de uitvoerlijst is een lijst met de volgende `pageSize` elementen uit de bronlijst, enzovoort.



## Category
List.Transformation functions
