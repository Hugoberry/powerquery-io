---
title: List.Range
---

# List.Range


## Description

Vráti podmnožinu zoznamu začínajúcu pri posune.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Vráti podmnožinu zoznamu začínajúcu pri posune <code>list</code>. Voliteľný parameter <code>offset</code> určuje maximálny počet položiek v podmnožine.


## Examples

### Example #1 
Nájdite podmnožinu začínajúcu s posunom 6 zoznamu čísel od 1 až po 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Nájdite podmnožinu s dĺžkou 2 od posunu 6 zo zoznamu čísel od 1 až po 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
