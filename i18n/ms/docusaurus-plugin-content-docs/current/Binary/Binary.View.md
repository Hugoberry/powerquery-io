---
title: Binary.View
---

# Binary.View


## Description

Mencipta atau melanjutkan perduaan dengan pengendali ditentukan pengguna bagi operasi pertanyaan dan tindakan.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Mengembalikan pandangan bagi <code>binary</code> di mana fungsi yang ditentukan dalam <code>handlers</code> digunakan sebagai ganti kelakuan lalai operasi apabila operasi digunakan pada pandangan.<br />Jika <code>binary</code> diberikan, semua fungsi pengendali adalah pilihan. Jika <code>binary</code> tidak diberikan, fungsi pengendali <code>GetStream</code> diperlukan. Jika fungsi pengendali tidak ditentukan untuk operasi, kelakuan lalai operasi digunakan pada <code>binary</code> (kecuali dalam kes <code>GetExpression</code>).<br />Fungsi pengendali mesti mengembalikan nilai yang sama dari segi makna dengan hasil penggunaan operasi terhadap <code>binary</code> (atau pandangan yang terhasil dalam kes <code>GetExpression</code>).<br />Jika fungsi pengendali membangkitkan ralat, kelakuan lalai operasi akan digunakan pada pandangan.<br /><code>Binary.View</code> boleh digunakan untuk melaksanakan penugasan pada sumber data – terjemahan pertanyaan M ke dalam operasi khusus sumber (contohnya, untuk memuat turun sebahagian daripada fail).<br />Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi <code>Binary.View</code>.<br />


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
