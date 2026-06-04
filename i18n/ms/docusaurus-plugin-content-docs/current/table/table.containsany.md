---
title: Table.ContainsAny
---

# Table.ContainsAny


Menunjukkan sama ada sebarang rekod yang ditentukan muncul sebagai baris dalam jadual.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Menunjukkan sama ada sebarang rekod yang ditentukan dalam senarai rekod `rows`, muncul sebagai baris dalam `table`. Parameter pilihan `equationCriteria`, mungkin ditentukan untuk mengawal perbandingan antara baris pada jadual.


## Examples

### Example #1
Tentukan sama ada jadual `({[a = 1, b = 2], [a = 3, b = 4]})` mengandungi baris `[a = 1, b = 2]` atau `[a = 3, b = 5]`.
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
Tentukan sama ada jadual `({[a = 1, b = 2], [a = 3, b = 4]})` mengandungi baris `[a = 1, b = 3]` atau `[a = 3, b = 5]`.
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
Tentukan sama ada jadual `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` mengandungi baris `[a = 1, b = 3]` atau `[a = 3, b = 5]` dengan membandingkan lajur sahaja \[a\].
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
