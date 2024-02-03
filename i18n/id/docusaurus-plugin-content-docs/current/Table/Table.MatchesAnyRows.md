---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Menunjukkan apakah setiap baris dalam tabel sesuai ketentuan yang diberikan.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Menunjukkan apakah setiap baris di <code>table</code> cocok dengan <code>condition</code> yang diberikan. Menghasilkan <code>true</code> jika setiap baris cocok, <code>false</code> jika sebaliknya.


## Examples

### Example #1 
Menentukan apakah setiap nilai baris di kolom [a] merata dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Menentukan apakah setiap nilai baris adalah [a = 1, b = 2], di tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
