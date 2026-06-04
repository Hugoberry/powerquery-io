---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Menunjukkan apakah setiap baris dalam tabel sesuai ketentuan yang diberikan.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Menunjukkan apakah setiap baris di `table` cocok dengan `condition` yang diberikan. Menghasilkan `true` jika setiap baris cocok, `false` jika sebaliknya.


## Examples

### Example #1
Menentukan apakah setiap nilai baris di kolom \[a\] merata dalam tabel `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Menentukan apakah setiap nilai baris adalah \[a = 1, b = 2\], di tabel `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
