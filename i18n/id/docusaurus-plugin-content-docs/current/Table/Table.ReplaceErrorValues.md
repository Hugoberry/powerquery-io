---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Menggantikan nilai kesalahan di kolom yang ditetapkan dengan nilai terkait yang ditetapkan.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Menggantikan nilai kesalahan di kolom yang ditetapkan dari <code>table</code> dengan nilai baru di daftar <code>errorReplacement</code>. Format daftarnya adalah \{\{column1, value1}, …}. Hanya boleh ada satu nilai pengganti per kolom, menetapkan kolom lebih dari sekali akan menyebabkan kesalahan.


## Examples

### Example #1 
Mengganti nilai kesalahan dengan teks &#34;world&#34; di tabel.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Mengganti nilai kesalahan di kolom A dengan teks &#34;hello&#34; dan di kolom B dengan teks &#34;world&#34; di tabel.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
