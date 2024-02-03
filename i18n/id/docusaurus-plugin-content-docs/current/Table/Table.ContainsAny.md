---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Menunjukkan apakah salah satu data yang ditetapkan muncul sebagai baris dalam tabel.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan apakah salah satu data yang ditetapkan dalam daftar data <code>rows</code> muncul sebagai baris dalam <code>table</code>.    Parameter opsional <code>equationCriteria</code> dapat ditetapkan untuk mengontrol perbandingan di antara baris dalam tabel.


## Examples

### Example #1 
Menentukan apakah tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; berisi baris &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Menentukan apakah tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; berisi baris &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Menentukan apakah tabel &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; berisi baris &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; atau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; dengan membandingkan hanya kolom [a].
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
