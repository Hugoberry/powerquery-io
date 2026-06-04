---
title: Table.View
---

# Table.View


Membuat atau memperluas tabel dengan penangan yang ditentukan pengguna untuk kueri dan operasi tindakan.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Menghasilkan tampilan `table` di mana fungsi yang ditentukan di `handlers` digunakan sebagai pengganti perilaku default operasi saat operasi diterapkan ke tampilan.

Jika `table` disediakan, semua fungsi handler bersifat opsional. Jika `table` tidak disediakan, fungsi handler `GetType` dan `GetRows` diperlukan. Jika fungsi handler tidak ditentukan untuk suatu operasi, perilaku operasi default diterapkan ke `table` sebagai gantinya (kecuali dalam kasus `GetExpression`).

Fungsi handler harus menghasilkan nilai yang secara semantik setara dengan hasil penerapan operasi terhadap `table` (atau tampilan hasil dalam kasus `GetExpression`).

Jika fungsi handler memunculkan kesalahan, perilaku default operasi diterapkan pada tampilan.

`Table.View` dapat digunakan untuk menerapkan pelipatan terhadap sumber data – terjemahan kueri M ke dalam kueri sumber tertentu (misalnya, untuk membuat pernyataan T-SQL dari kueri M).

Lihat dokumentasi konektor kustom Power Query yang telah diterbitkan untuk deskripsi yang lebih lengkap tentang `Table.View`.


## Examples

### Example #1
Membuat tampilan dasar yang tidak perlu mengakses baris untuk menentukan tipe atau jumlah baris.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
