---
title: List.Repeat
---

# List.Repeat


## Description

Asıl listenin sayı tekrarları olan bir liste döndürür.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

<code>list</code> asıl listesinin <code>count</code> tekrarları olan bir liste döndürür.


## Examples

### Example #1 
\{1, 2} değerlerinin 3 kez tekrarlandığı bir liste oluşturur.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
