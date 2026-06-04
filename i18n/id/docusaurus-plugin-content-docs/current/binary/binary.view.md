---
title: Binary.View
---

# Binary.View


Membuat atau memperluas biner dengan handler yang ditentukan pengguna untuk kueri dan operasi tindakan.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Menghasilkan tampilan `binary` saat fungsi yang ditentukan di `handlers` digunakan sebagai pengganti perilaku default operasi saat operasi diterapkan ke tampilan.

Jika `binary` disediakan, semua fungsi handler bersifat opsional. Jika `binary` tidak disediakan, fungsi handler `GetStream` diperlukan. Jika fungsi handler tidak ditentukan untuk operasi, perilaku operasi default diterapkan ke `binary` sebagai gantinya (kecuali dalam kasus `GetExpression`).

Fungsi handler harus menghasilkan nilai yang secara semantik setara dengan hasil penerapan operasi terhadap `binary` (atau tampilan hasil dalam kasus `GetExpression`).

Jika fungsi handler memunculkan kesalahan, perilaku default operasi diterapkan pada tampilan.

`Binary.View` dapat digunakan untuk mengimplementasikan pelipatan ke sumber data – terjemahan kueri M ke dalam operasi khusus sumber (misalnya, untuk mengunduh bagian file).

Lihat dokumentasi konektor kustom Power Query yang diterbitkan untuk deskripsi yang lebih lengkap tentang `Binary.View`.


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
