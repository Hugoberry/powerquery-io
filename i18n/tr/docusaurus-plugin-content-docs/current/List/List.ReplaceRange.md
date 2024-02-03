---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Değerlerin count sayısını değiştirme değeri konumundan başlayarak değiştirir.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

<code>list</code> içindeki <code>count</code> değeri <code>replaceWith</code> listesi ile belirtilen <code>index</code> konumundan başlayarak kaldırır.


## Examples

### Example #1 
\{1, 2, 7, 8, 9, 5} listesindeki \{7, 8, 9} değerlerini \{3, 4} ile değiştirir.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
