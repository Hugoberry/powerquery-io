---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Menghasilkan format biner yang memilih format biner berikutnya berdasarkan nilai yang telah dibaca.  Nilai format biner yang dihasilkan fungsi ini dapat digunakan pada tahap:<ul><li>Format biner yang ditetapkan parameter <code>binaryFormat</code> digunakan untuk membaca nilai.</li><li>Nilai diserahkan ke fungsi pilihan yang ditetapkan parameter <code>chooseFunction</code>.</li><li>Fungsi pilihan akan memeriksa nilai dan menghasilkan format biner kedua.</li><li>Format biner kedua yang digunakan untuk membaca nilai kedua.</li><li>Jika fungsi kombinasi ditetapkan, maka nilai pertama dan kedua diserahkan ke fungsi kombinasi, dan menghasilkan nilai hasil.</li><li>Jika fungsi kombinasi tidak ditetapkan, maka nilai kedua akan dihasilkan.</li><li>Nilai kedua akan dihasilkan.</li></ul>Parameter opsional <code>type</code> menunjukkan tipe format biner yang akan dihasilkan oleh fungsi pilihan.  Baik <code>type any</code>, <code>type list</code>, maupun <code>type binary</code> dapat ditetapkan.  Jika parameter <code>type</code> tidak ditetapkan, maka <code>type any</code> akan digunakan.   Jika <code>type list</code> atau <code>type binary</code> digunakan, maka sistem dapat menghasilkan <code>binary</code> streaming atau nilai <code>list</code> dan bukan yang di-buffer, yang dapat mengurangi jumlah memori yang diperlukan untuk membaca format.


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
