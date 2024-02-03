---
title: List.FirstN
---

# List.FirstN


## Description

Returnerer det første sæt elementer på listen ved at angive, hvor mange elementer der skal returneres, eller en kvalificerende betingelse.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Hvis der er angivet et antal, returneres der elementer op til det angivne antal. </li>  <li>Hvis der er angivet en betingelse, returneres alle elementer, der i starten opfylder betingelsen. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. </li> </ul>


## Examples

### Example #1 
Find de første værdier på listen \{3, 4, 5, -1, 7, 8, 2}, der er større end 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
