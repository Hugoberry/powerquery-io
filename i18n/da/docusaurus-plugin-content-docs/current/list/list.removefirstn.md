---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Returnerer en liste, der springer det angivne antal elementer over i starten af listen.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnerer en liste, der fjerner første element på listen `list`. Hvis `list` er en tom liste, returneres der en tom liste. Denne funktion kræver en valgfri parameter, `countOrCondition`, for at understøtte fjernelse af flere værdier som angivet nedenfor.

-   Hvis der er angivet et tal, fjernes op til dette antal elementer.
-   Hvis der er angivet en betingelse, fjernes alle efterfølgende matchende elementer i starten af `list`.
-   Hvis denne parameter er null, observeres standardfunktionsmåden.


## Examples

### Example #1
Opret en liste ud fra \{1, 2, 3, 4, 5\} uden de første 3 tal.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Opret en liste ud fra \{5, 4, 2, 6, 1\}, der starter med et tal, der er mindre end 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
