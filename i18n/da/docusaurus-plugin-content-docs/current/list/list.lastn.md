---
title: List.LastN
---

# List.LastN


Returnerer en liste over det sidste element eller de sidste elementer i den angivne liste. Kan evt. angive, hvor mange værdier der skal returneres, eller en kvalificerende betingelse.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returnerer en liste over det sidste element eller de sidste elementer i den angivne liste.

-   `list`: Den liste, der skal undersøges. Hvis listen er tom, returneres en tom liste.
-   `countOrCondition`: (Valgfrit) Understøtter indsamling af flere elementer eller filtrering af elementer. Selvom denne parameter er angivet som valgfri, opstår der en fejl, hvis værdien ikke angives eller er `null`. Denne parameter kan angives på to måder:
    -   Hvis der er angivet et tal, fjernes op til dette antal elementer.
    -   Hvis der er angivet en betingelse, returneres alle elementer, der opfylder betingelsen, startende fra slutningen af listen. Når et element ikke opfylder betingelsen, tages der ikke yderligere elementer i betragtning.


## Examples

### Example #1
Find den sidste værdi på listen \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Find de sidste værdier på listen \{3, 4, 5, -1, 7, 8, 2\}, der er større end 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
