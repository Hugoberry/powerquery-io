---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Mengembalikan kedudukan baris dalam jadual.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan kedudukan baris untuk tika pertama bagi <code>row</code> dalam <code>table</code> yang ditentukan. Mengembalikan -1 jika tiada tika ditemui.    <ul>       <li><code>table</code>: Jadual input.</li>       <li><code>row</code>: Baris dalam jadual untuk mencari kedudukan.</li>       <li><code>occurrence</code>: <i>[Pilihan]</i> Menentukan tika baris yang mana perlu dikembalikan.</li>       <li><code>equationCriteria</code>: <i>[Pilihan]</i> Mengawal perbandingan antara baris jadual.</li>    </ul>    


## Examples

### Example #1 
Cari kedudukan tika pertama bagi [a = 2, b = 4] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Cari kedudukan tika kedua bagi [a = 2, b = 4] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Cari kedudukan semua tika bagi [a = 2, b = 4] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
