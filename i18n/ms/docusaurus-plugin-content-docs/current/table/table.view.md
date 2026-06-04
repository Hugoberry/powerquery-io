---
title: Table.View
---

# Table.View


Cipta atau lanjutkan jadual dengan pengendali mesra pengguna bagi pertanyaan dan operasi aksi.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Mengembalikan paparan `table` yang mana fungsi ditentukan dalam `handlers` digunakan sebagai ganti bagi tingkah laku lalai pengendalian apabila pengendalian digunakan pada pandangan.

Jika `table` diberikan, semua fungsi pengendali adalah pilihan. Jika `table` tidak diberikan, fungsi pengendali `GetType` dan `GetRows` diperlukan. Sebaliknya, jika fungsi pengendali tidak ditentukan untuk pengendalian, tingkah laku lalai bagi pengendalian digunakan pada `table` (kecuali jika `GetExpression`).

Fungsi pengendali mestilah mengembalikan nilai yang setara secara semantik dengan hasil yang menggunakan pengendalian terhadap `table` (atau pandangan yang terhasil dalam kes `GetExpression`).

Jika fungsi pengendali meningkatkan ralat, tingkah laku lalai pengendalian digunakan pada pandangan.

`Table.View` boleh digunakan untuk melaksanakan penugasan kepada sumber data – terjemahan pertanyaan M ke dalam pertanyaan khusus sumber (sebagai contoh, untuk mencipta pernyataan T-SQL daripada pertanyaan M).

Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi `Table.View`.


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
