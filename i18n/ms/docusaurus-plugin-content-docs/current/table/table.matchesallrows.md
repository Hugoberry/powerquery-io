---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Menunjukkan sama ada semua baris dalam jadual mencapai syarat yang ditentukan.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Menunjukkan sama ada semua baris dalam `table` sepadan dengan `condition` yang ditentukan. Mengembalikan `true` jika semua baris sepadan, `false` sebaliknya.


## Examples

### Example #1
Tentukan sama anda semua nilai baris dalam lajur \[a\] adalah genap dalam jadual.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Cari sama ada semua nilai baris ialah \[a = 1, b = 2\], dalam jadual `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
