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

Hiermee wordt <code>list</code> gesplitst in een lijst met lijsten, waarbij het eerste element van de uitvoerlijst een lijst is met de eerste <code>pageSize</code> elementen uit    de bronlijst, het volgende element van de uitvoerlijst is een lijst met de volgende <code>pageSize</code> elementen uit de bronlijst, enzovoort.



## Category
List.Transformation functions
