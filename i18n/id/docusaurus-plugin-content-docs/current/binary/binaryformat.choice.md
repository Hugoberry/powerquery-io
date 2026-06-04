---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Menghasilkan format biner yang memilih format biner berikutnya berdasarkan nilai yang telah dibaca.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Menghasilkan format biner yang memilih format biner berikutnya berdasarkan nilai yang telah dibaca. Nilai format biner yang dihasilkan fungsi ini dapat digunakan pada tahap:

-   Format biner yang ditetapkan parameter `binaryFormat` digunakan untuk membaca nilai.
-   Nilai diserahkan ke fungsi pilihan yang ditetapkan parameter `chooseFunction`.
-   Fungsi pilihan akan memeriksa nilai dan menghasilkan format biner kedua.
-   Format biner kedua yang digunakan untuk membaca nilai kedua.
-   Jika fungsi kombinasi ditetapkan, maka nilai pertama dan kedua diserahkan ke fungsi kombinasi, dan menghasilkan nilai hasil.
-   Jika fungsi kombinasi tidak ditetapkan, maka nilai kedua akan dihasilkan.
-   Nilai kedua akan dihasilkan.

Parameter opsional `type` menunjukkan tipe format biner yang akan dihasilkan oleh fungsi pilihan. Baik `type any`, `type list`, maupun `type binary` dapat ditetapkan. Jika parameter `type` tidak ditetapkan, maka `type any` akan digunakan. Jika `type list` atau `type binary` digunakan, maka sistem dapat menghasilkan `binary` streaming atau nilai `list` dan bukan yang di-buffer, yang dapat mengurangi jumlah memori yang diperlukan untuk membaca format.


## Examples

### Example #1
Membaca daftar byte yang jumlah elemennya ditentukan oleh byte pertama.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Membaca daftar byte yang jumlah elemennya ditentukan oleh byte pertama, dan mempertahankan byte pertama yang terbaca.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Membaca daftar byte yang jumlah elemennya ditentukan oleh byte pertama menggunakan daftar streaming.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
