---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Memperluas kolom data menjadi beberapa kolom dengan setiap nilai.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

Berdasarkan <code>column</code> data dalam input <code>table</code>, membuat tabel dengan kolom untuk setiap bidang dalam data. Secara opsional, <code>newColumnNames</code> dapat ditetapkan untuk memastikan nama unik kolom dalam tabel baru.    <ul>        <li><code>table</code>: Tabel asli dengan kolom data yang akan diperluas. </li>        <li><code>column</code>: Kolom yang akan diperluas.</li>        <li><code>fieldNames</code>: Daftar bidang yang akan diperluas menjadi beberapa kolom dalam tabel.</li>        <li><code>newColumnNames</code>: Daftar nama kolom yang akan diberikan ke kolom baru. Nama kolom baru tidak dapat menduplikasikan kolom dalam tabel baru.</li>    </ul>


## Examples

### Example #1 
Memperluas kolom [a] dalam tabel &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; menjadi 3 kolom &#34;aa&#34;, &#34;bb&#34;, dan &#34;cc&#34;.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
