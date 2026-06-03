---
title: List.LastN
---

# List.LastN


Returnerar en lista över de senaste objekten i den angivna listan. Kan valfritt ange hur många värden som ska returneras eller ett kvalificeringsvillkor.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returnerar en lista över de senaste objekten i den angivna listan.

-   `list`: Listan som ska undersökas. Om listan är tom returneras en tom lista.
-   `countOrCondition`: (Valfritt) Stöder insamling av flera objekt eller filtrering av objekt. Även om den här parametern är valfri uppstår ett fel om värdet inte anges eller är `null`. Den här parametern kan anges på två sätt:
    -   Om ett tal anges returneras upp till så många objekt.
    -   Om ett villkor anges returneras alla objekt som uppfyller villkoret, med start från slutet av listan. Om ett objekt inte uppfyller villkoret beaktas inga fler objekt.


## Examples

### Example #1
Hitta det sista värdet i listan \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Hitta de sista värdena i listan \{3, 4, 5, -1, 7, 8, 2\} som är större än 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
