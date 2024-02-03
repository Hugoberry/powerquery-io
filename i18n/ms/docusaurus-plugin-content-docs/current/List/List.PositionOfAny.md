---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Mengembalikan ofset pertama bagi nilai dalam senarai.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan ofset dalam senarai <code>list</code> bagi tika pertama nilai dalam senarai <code>values</code>. Mengembalikan -1 jika tiada tika ditemui.    Parameter tika pilihan <code>occurrence</code> boleh ditentukan.<ul>   <li><code>occurrence</code>: Bilangan maksimum tika yang boleh dikembalikan.</li></ul>


## Examples

### Example #1 
Kedudukan pertama dalam senarai \{1, 2, 3} pada yang mana nilai 2 atau 3 muncul.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
