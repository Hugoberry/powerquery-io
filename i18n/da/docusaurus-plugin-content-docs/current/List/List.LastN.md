---
title: List.LastN
---

# List.LastN


## Description

Returnerer den sidste værdi på listen.  Du kan evt. angive, hvor mange værdier der skal returneres, eller en kvalificerende betingelse.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Returnerer det sidste element på listen <code>list</code>. Hvis listen er tom, udløses der en undtagelse. Denne funktion bruger en valgfri parameter, <code>countOrCondition</code>, for at understøtte indsamling af flere elementer eller filtrering af elementer. <code>countOrCondition</code> kan angives på tre måder: <ul>  <li>Hvis der er angivet et antal, returneres der elementer op til det angivne antal. </li>  <li>Hvis der er angivet en betingelse, returneres alle elementer, der i starten opfylder betingelsen, med start i slutningen af listen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. </li>  <li>Hvis denne parameter er null, returneres det sidste element på listen.</li> </ul>


## Examples

### Example #1 
Find den sidste værdi på listen \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Find de sidste værdier på listen \{3, 4, 5, -1, 7, 8, 2}, der er større end 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
