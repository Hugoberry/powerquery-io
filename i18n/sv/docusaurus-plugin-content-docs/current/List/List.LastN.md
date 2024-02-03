---
title: List.LastN
---

# List.LastN


## Description

Returnerar det sista värdet i listan. Kan valfritt ange hur många värden som ska returneras eller ett kvalificeringsvillkor.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Returnerar det sista objektet i listan <code>list</code>. Om listan är tom genereras ett undantag.Den här funktionen använder en valfri parameter, <code>countOrCondition</code>, för att samla flera objekt eller filtrera objekt. <code>countOrCondition</code> kan anges på tre sätt: <ul>  <li>Om ett tal anges returneras så många objekt. </li>  <li>Om ett villkor anges returneras alla objekt som inledningsvis uppfyller villkoret, med början i listans slut. Om ett objekt inte uppfyller villkoret utvärderas inga fler objekt. </li>  <li>Om den här parametern är null returneras det sista objektet i listan.</li> </ul>


## Examples

### Example #1 
Hitta det sista värdet i listan \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Hitta de sista värdena i listan \{3, 4, 5, -1, 7, 8, 2} som är större än 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
