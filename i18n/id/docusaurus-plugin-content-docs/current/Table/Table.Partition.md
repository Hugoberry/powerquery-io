---
title: Table.Partition
---

# Table.Partition


## Description

Mempartisi tabel menjadi daftar tabel berdasarkan jumlah grup dan kolom yang ditetapkan.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Mempartisi <code>table</code> menjadi daftar jumlah tabel <code>groups</code>, berdasarkan nilai <code>column</code> dan fungsi <code>hash</code>.    Fungsi <code>hash</code> diterapkan ke nilai baris <code>column</code> untuk memperoleh nilai hash baris. Modulo nilai hash <code>groups</code> akan menentukan tabel yang dihasilkan untuk menempatkan baris.    <ul>       <li><code>table</code>: Tabel yang akan dipartisi.</li>       <li><code>column</code>: Kolom yang akan di-hash guna menentukan tabel yang dihasilkan untuk memasukkan baris.</li>       <li><code>groups</code>: Jumlah tabel untuk tabel input yang akan dipartisi.</li>       <li><code>hash</code>: Fungsi yang diterapkan untuk memperoleh nilai hash.</li>    </ul>  


## Examples

### Example #1 
Mempartisi tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; menjadi 2 tabel di kolom [a], menggunakan nilai kolom sebagai fungsi hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
