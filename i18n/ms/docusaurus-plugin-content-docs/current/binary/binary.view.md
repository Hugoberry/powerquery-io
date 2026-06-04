---
title: Binary.View
---

# Binary.View


Mencipta atau melanjutkan perduaan dengan pengendali ditentukan pengguna bagi operasi pertanyaan dan tindakan.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Mengembalikan pandangan bagi `binary` di mana fungsi yang ditentukan dalam `handlers` digunakan sebagai ganti kelakuan lalai operasi apabila operasi digunakan pada pandangan.

Jika `binary` diberikan, semua fungsi pengendali adalah pilihan. Jika `binary` tidak diberikan, fungsi pengendali `GetStream` diperlukan. Jika fungsi pengendali tidak ditentukan untuk operasi, kelakuan lalai operasi digunakan pada `binary` (kecuali dalam kes `GetExpression`).

Fungsi pengendali mesti mengembalikan nilai yang sama dari segi makna dengan hasil penggunaan operasi terhadap `binary` (atau pandangan yang terhasil dalam kes `GetExpression`).

Jika fungsi pengendali membangkitkan ralat, kelakuan lalai operasi akan digunakan pada pandangan.

`Binary.View` boleh digunakan untuk melaksanakan penugasan pada sumber data – terjemahan pertanyaan M ke dalam operasi khusus sumber (contohnya, untuk memuat turun sebahagian daripada fail).

Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi `Binary.View`.


## Examples

### Example #1
Cipta pandangan asas yang tidak memerlukan capaian data untuk menentukan panjang.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
