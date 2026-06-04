---
title: List.ReplaceRange
---

# List.ReplaceRange


Mengganti jumlah nilai yang dimulai pada posisi dengan nilai pengganti.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Mengganti nilai `count` dalam `list` dengan daftar `replaceWith`, yang dimulai pada posisi yang ditetapkan, `index`.


## Examples

### Example #1
Mengganti \{7, 8, 9\} dalam daftar \{1, 2, 7, 8, 9, 5\} dengan \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
