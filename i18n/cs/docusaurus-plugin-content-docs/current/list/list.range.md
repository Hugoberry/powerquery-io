---
title: List.Range
---

# List.Range


Vrátí podmnožinu seznamu počínaje posunutím.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Vrátí podmnožinu `list` počínaje od `offset`. Volitelný parametr `count` určuje maximální počet položek v podmnožině.


## Examples

### Example #1
Vyhledá podmnožinu seznamu čísel 1 až 10 počínaje posunutím o hodnotu 6.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Vrátí podmnožinu o délce 2 položky počínaje posunutím 6 ze seznamu čísel od 1 do 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
