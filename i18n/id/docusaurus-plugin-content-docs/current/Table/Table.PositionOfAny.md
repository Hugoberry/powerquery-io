---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Menghasilkan posisi atau memposisikan salah satu baris yang ditetapkan dalam tabel.


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

Mengembalikan posisi baris dari <code>table</code> pada kemunculan pertama daftar <code>rows</code>. Mengembalikan -1 jika tidak ada kemunculan yang ditemukan.    <ul>    <li><code>table</code>: Tabel masukan.</li>       <li><code>rows</code>: Daftar baris dalam tabel yang akan dicari posisinya.</li>       <li><code>occurrence</code>: <i>[Opsional]</i> Menetapkan kemunculan baris yang akan dihasilkan.</li>       <li><code>equationCriteria</code>: <i>[Opsional]</i> Mengontrol perbandingan di antara baris tabel.</li>    </ul>    


## Examples

### Example #1 
Mencari posisi kemunculan pertama [a = 2, b = 4] atau [a = 6, b = 8] dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Mencari posisi semua kemunculan [a = 2, b = 4] atau [a = 6, b = 8] dalam tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
