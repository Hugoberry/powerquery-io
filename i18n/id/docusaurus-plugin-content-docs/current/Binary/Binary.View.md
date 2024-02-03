---
title: Binary.View
---

# Binary.View


## Description

Membuat atau memperluas biner dengan handler yang ditentukan pengguna untuk kueri dan operasi tindakan.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Menghasilkan tampilan <code>binary</code> saat fungsi yang ditentukan di <code>handlers</code> digunakan sebagai pengganti perilaku default operasi saat operasi diterapkan ke tampilan.<br />Jika <code>binary</code> disediakan, semua fungsi handler bersifat opsional. Jika <code>binary</code> tidak disediakan, fungsi handler <code>GetStream</code> diperlukan. Jika fungsi handler tidak ditentukan untuk operasi, perilaku operasi default diterapkan ke <code>binary</code> sebagai gantinya (kecuali dalam kasus <code>GetExpression</code>).<br />Fungsi handler harus menghasilkan nilai yang secara semantik setara dengan hasil penerapan operasi terhadap <code>binary</code> (atau tampilan hasil dalam kasus <code>GetExpression</code>).<br />Jika fungsi handler memunculkan kesalahan, perilaku default operasi diterapkan pada tampilan.<br /><code>Binary.View</code> dapat digunakan untuk mengimplementasikan pelipatan ke sumber data – terjemahan kueri M ke dalam operasi khusus sumber (misalnya, untuk mengunduh bagian file).<br />Lihat dokumentasi konektor kustom Power Query yang diterbitkan untuk deskripsi yang lebih lengkap tentang <code>Binary.View</code>.<br />


## Examples

### Example #1 
Buat tampilan dasar yang tidak memerlukan akses data untuk menentukan panjangnya.
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
