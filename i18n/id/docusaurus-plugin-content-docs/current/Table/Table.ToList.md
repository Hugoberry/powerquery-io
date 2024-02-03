---
title: Table.ToList
---

# Table.ToList


## Description

Mengkonversi tabel menjadi daftar dengan menerapkan fungsi kombinasi yang ditetapkan pada setiap baris nilai dalam tabel.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Mengkonversi tabel menjadi daftar dengan menerapkan fungsi kombinasi yang ditetapkan pada setiap baris nilai dalam tabel.


## Examples

### Example #1 
Kombinasikan teks dari baris dengan koma.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
