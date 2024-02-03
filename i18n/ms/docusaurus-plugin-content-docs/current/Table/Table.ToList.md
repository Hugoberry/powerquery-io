---
title: Table.ToList
---

# Table.ToList


## Description

Menukarkan jadual kepada senarai dengan menggunakan fungsi penggabungan yang ditentukan pada setiap baris nilai dalam jadual.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Menukarkan jadual kepada senarai dengan menggunakan fungsi penggabungan yang ditentukan pada setiap baris nilai dalam jadual.


## Examples

### Example #1 
Gabungkan teks bagi setiap baris dengan koma.
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
