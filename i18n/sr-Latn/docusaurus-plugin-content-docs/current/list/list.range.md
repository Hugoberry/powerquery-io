---
title: List.Range
---

# List.Range


Vraća podskup liste koji počinje od pomaka.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Vraća podskup od `list` koji počinje sa `offset`. Opcionalan parametar,`count`, određuje maksimalan broj stavki u podskupu.


## Examples

### Example #1
Pronalaženje podskupa koji počinje od pomaka 6 na listi brojeva od 1 do 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Pronalaženje podskupa dužine 2 od pomaka 6 na listi brojeva od 1 do 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
