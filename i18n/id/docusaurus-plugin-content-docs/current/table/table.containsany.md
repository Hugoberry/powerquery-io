---
title: Table.ContainsAny
---

# Table.ContainsAny


Menunjukkan apakah salah satu data yang ditetapkan muncul sebagai baris dalam tabel.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan apakah salah satu data yang ditetapkan dalam daftar data `rows` muncul sebagai baris dalam `table`. Parameter opsional `equationCriteria` dapat ditetapkan untuk mengontrol perbandingan di antara baris dalam tabel.


## Examples

### Example #1
Menentukan apakah tabel `({[a = 1, b = 2], [a = 3, b = 4]})` berisi baris `[a = 1, b = 2]` atau `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah tabel `({[a = 1, b = 2], [a = 3, b = 4]})` berisi baris `[a = 1, b = 3]` atau `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Menentukan apakah tabel `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` berisi baris `[a = 1, b = 3]` atau `[a = 3, b = 5]` dengan membandingkan hanya kolom \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
