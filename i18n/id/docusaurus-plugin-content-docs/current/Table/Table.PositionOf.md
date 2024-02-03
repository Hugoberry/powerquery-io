---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Menghasilkan posisi atau memposisikan baris dalam tabel.


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

Mengembalikan posisi baris kemunculan pertama <code>row</code> di <code>table</code> yang ditetapkan. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.    <ul>       <li><code>table</code>: Tabel masukan.</li>       <li><code>row</code>: Baris dalam tabel yang akan dicari posisinya.</li>       <li><code>occurrence</code>: <i>[Opsional]</i> Menetapkan kemunculan baris yang akan dihasilkan.</li>       <li><code>equationCriteria</code>: <i>[Opsional]</i> Mengontrol perbandingan di antara baris tabel.</li>    </ul>    


## Examples

### Example #1 
Mencari posisi kemunculan pertama [a = 2, b = 4] dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Mencari posisi kemunculan kedua [a = 2, b = 4] dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Mencari posisi semua kemunculan [a = 2, b = 4] dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
