---
title: List.RemoveRange
---

# List.RemoveRange


Tar bort ett antal värden med början vid den angivna positionen.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Tar bort <code>count</code> värden i <code>list</code> med början vid den angivna positionen, <code>index</code>.


## Examples

### Example #1 
Ta bort 3 värden i listan \{1, 2, 3, 4, -6, -2, -1, 5} med början vid index 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
