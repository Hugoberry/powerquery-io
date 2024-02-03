---
title: Table.View
---

# Table.View


## Description

Membuat atau memperluas tabel dengan penangan yang ditentukan pengguna untuk kueri dan operasi tindakan.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Menghasilkan tampilan <code>table</code> di mana fungsi yang ditentukan di <code>handlers</code> digunakan sebagai pengganti perilaku default operasi saat operasi diterapkan ke tampilan.<br />Jika <code>table</code> disediakan, semua fungsi handler bersifat opsional. Jika <code>table</code> tidak disediakan, fungsi handler <code>GetType</code> dan <code>GetRows</code> diperlukan. Jika fungsi handler tidak ditentukan untuk suatu operasi, perilaku operasi default diterapkan ke <code>table</code> sebagai gantinya (kecuali dalam kasus <code>GetExpression</code>).<br />Fungsi handler harus menghasilkan nilai yang secara semantik setara dengan hasil penerapan operasi terhadap <code>table</code> (atau tampilan hasil dalam kasus <code>GetExpression</code>).<br />Jika fungsi handler memunculkan kesalahan, perilaku default operasi diterapkan pada tampilan.<br /><code>Table.View</code> dapat digunakan untuk menerapkan pelipatan terhadap sumber data – terjemahan kueri M ke dalam kueri sumber tertentu (misalnya, untuk membuat pernyataan T-SQL dari kueri M).<br />Lihat dokumentasi konektor kustom Power Query yang telah diterbitkan untuk deskripsi yang lebih lengkap tentang <code>Table.View</code>.<br />


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
