---
title: Binary.Split
---

# Binary.Split


Hiermee wordt het opgegeven binaire bestand gesplitst in een lijst met binaire bestanden met het opgegeven paginaformaat.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Splitst <code>binary</code> in een lijst met binaire bestanden waarbij het eerste element van de uitvoerlijst een binair element is met de eerste <code>pageSize</code> bytes van het binaire bronbestand, het volgende element van de uitvoerlijst is een binair element met de volgende <code>pageSize</code> bytes uit het binaire bronbestand, enzovoort.



## Category
Binary
