---
title: List.PositionOf
---

# List.PositionOf


## Description

Menghasilkan offset nilai dalam daftar.


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

Mengembalikan offset yang menampilkan nilai <code>value</code> dalam daftar <code>list</code>. Mengembalikan -1 jika nilai tidak ditampilkan.    Parameter kemunculan opsional <code>occurrence</code> dapat ditetapkan.<ul>   <li><code>occurrence</code>: Jumlah maksimum kemunculan untuk dilaporkan.</li></ul>


## Examples

### Example #1 
Mencari posisi dalam daftar \{1, 2, 3} yang menampilkan nilai 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
