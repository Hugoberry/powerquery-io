---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Mempartisi `table` menjadi daftar jumlah tabel `groups`, berdasarkan nilai `column` dan fungsi `hash`. Fungsi `hash` diterapkan ke nilai baris `column` untuk memperoleh nilai hash baris. Modulo nilai hash `groups` akan menentukan tabel yang dihasilkan untuk menempatkan baris.

-   `table`: Tabel yang akan dipartisi.
-   `column`: Kolom yang akan di-hash guna menentukan tabel yang dihasilkan untuk memasukkan baris.
-   `groups`: Jumlah tabel untuk tabel input yang akan dipartisi.
-   `hash`: Fungsi yang diterapkan untuk memperoleh nilai hash.


## Examples

### Example #1
Mempartisi tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` menjadi 2 tabel di kolom \[a\], menggunakan nilai kolom sebagai fungsi hash.
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
