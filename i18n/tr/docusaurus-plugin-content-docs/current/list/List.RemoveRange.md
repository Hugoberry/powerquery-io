---
title: List.RemoveRange
---

# List.RemoveRange


Değerlerin count sayısını belirtilen konumdan başlayarak kaldırır.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

<code>list</code> içindeki <code>count</code> değeri belirtilen <code>index</code> konumundan başlayarak kaldırır.


## Examples

### Example #1 
\{1, 2, 3, 4, -6, -2, -1, 5} listesindeki 3 değeri 4 dizininden başlayarak kaldırır.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
