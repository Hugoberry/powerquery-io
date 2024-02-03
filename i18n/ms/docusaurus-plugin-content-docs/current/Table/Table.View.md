---
title: Table.View
---

# Table.View


## Description

Cipta atau lanjutkan jadual dengan pengendali mesra pengguna bagi pertanyaan dan operasi aksi.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Mengembalikan paparan <code>table</code> yang mana fungsi ditentukan dalam <code>handlers</code> digunakan sebagai ganti bagi tingkah laku lalai pengendalian apabila pengendalian digunakan pada pandangan.<br />Jika <code>table</code> diberikan, semua fungsi pengendali adalah pilihan. Jika <code>table</code> tidak diberikan, fungsi pengendali <code>GetType</code> dan <code>GetRows</code> diperlukan. Sebaliknya, jika fungsi pengendali tidak ditentukan untuk pengendalian, tingkah laku lalai bagi pengendalian digunakan pada <code>table</code> (kecuali jika <code>GetExpression</code>).<br />Fungsi pengendali mestilah mengembalikan nilai yang setara secara semantik dengan hasil yang menggunakan pengendalian terhadap <code>table</code> (atau pandangan yang terhasil dalam kes <code>GetExpression</code>).<br />Jika fungsi pengendali meningkatkan ralat, tingkah laku lalai pengendalian digunakan pada pandangan.<br /><code>Table.View</code> boleh digunakan untuk melaksanakan penugasan kepada sumber data – terjemahan pertanyaan M ke dalam pertanyaan khusus sumber (sebagai contoh, untuk mencipta pernyataan T-SQL daripada pertanyaan M).<br />Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi <code>Table.View</code>.<br />


## Examples

### Example #1 
Cipta pandangan asas yang tidak memerlukan capaian baris untuk menentukan jenis atau kiraan baris.
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
