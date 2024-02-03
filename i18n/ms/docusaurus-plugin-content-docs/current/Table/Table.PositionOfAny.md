---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Mengembalikan kedudukan sebarang daripada baris yang ditentukan dalam jadual.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Mengembalikan kedudukan baris dari <code>table</code> pada kejadian pertama senarai bagi <code>rows</code>. Mengembalikan -1 jika tiada tika ditemui.    <ul>    <li><code>table</code>: Jadual input.</li>       <li><code>rows</code>:  Senarai baris dalam jadual untuk mencari kedudukan.</li>       <li><code>occurrence</code>: <i>[Pilihan]</i> Menentukan tika baris yang mana perlu dikembalikan.</li>       <li><code>equationCriteria</code>: <i>[Pilihan]</i> Mengawal perbandingan antara baris jadual.</li>    </ul>    


## Examples

### Example #1 
Cari kedudukan tika pertama bagi [a = 2, b = 4] atau [a = 6, b = 8] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Cari kedudukan semua tika bagi [a = 2, b = 4] atau [a = 6, b = 8] dalam jadual &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
