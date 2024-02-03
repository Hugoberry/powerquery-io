---
title: List.PositionOf
---

# List.PositionOf


## Description

Mengembalikan ofset bagi nilai dalam senarai.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan ofset pada yang mana nilai <code>value</code> muncul dalam senarai <code>list</code>. Mengembalikan -1 jika nilai tidak muncul.    Parameter tika pilihan <code>occurrence</code> boleh ditentukan.<ul>   <li><code>occurrence</code>: Bilangan maksimum tika untuk dilaporkan.</li></ul>


## Examples

### Example #1 
Cari kedudukan dalam senarai \{1, 2, 3} pada yang mana nilai 3 muncul.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
