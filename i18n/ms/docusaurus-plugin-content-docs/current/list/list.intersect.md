---
title: List.Intersect
---

# List.Intersect


Mengembalikan persilangan nilai senarai yang ditemui dalam input.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Mengembalikan persilangan nilai senarai yang ditemui dalam senarai input `lists`. Parameter pilihan, `equationCriteria`, boleh ditentukan.


## Examples

### Example #1
Cari persilangan bagi senarai \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
