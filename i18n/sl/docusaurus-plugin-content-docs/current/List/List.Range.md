---
title: List.Range
---

# List.Range


## Description

Vrne podnabor seznama, ki se začne v odmiku.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Vrne podnabor seznama, ki se začne v odmiku <code>list</code>. Izbirni parameter <code>offset</code> nastavi največje število elementov v podnaboru.


## Examples

### Example #1 
Poiščite podnabor, ki se začne v odmiku 6 na seznamu števil od 1 do 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Poiščite podnabor z dolžino 2 iz odmika 6 na seznamu števil od 1 do 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
