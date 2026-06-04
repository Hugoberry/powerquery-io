---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Menunjukkan apakah semua baris dalam tabel sesuai ketentuan yang diberikan.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Menunjukkan apakah semua baris di `table` cocok dengan `condition` yang diberikan. Menghasilkan `true` jika semua baris cocok, `false` jika sebaliknya.


## Examples

### Example #1
Menentukan apakah semua nilai baris di kolom \[a\] merata dalam tabel.
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
Mencari jika semua nilai baris adalah \[a = 1, b = 2\], di tabel `({[a = 1, b = 2], [a = 3, b = 4]})`.
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
