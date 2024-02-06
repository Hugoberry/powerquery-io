---
title: List.FirstN
---

# List.FirstN


Returnerar den första uppsättningen objekt i listan genom att ange hur många objekt som ska returneras eller ett kvalificeringsvillkor.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Om ett tal anges returneras så många objekt. </li>  <li>Om ett villkor anges returneras alla objekt som inledningsvis uppfyller villkoret. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. </li> </ul>


## Examples

### Example #1 
Hitta de första värdena i listan \{3, 4, 5, -1, 7, 8, 2} som är större än 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
