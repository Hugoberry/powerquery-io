---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Menghasilkan format biner yang membatasi jumlah data yang dapat dibaca.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Menghasilkan format biner yang membatasi jumlah data yang dapat dibaca.  Baik <code>BinaryFormat.List</code> maupun <code>BinaryFormat.Binary</code> dapat digunakan untuk membaca data hingga akhir data.  <code>BinaryFormat.Length</code> dapat digunakan untuk membatasi byte yang dibaca.  Parameter <code>binaryFormat</code> akan menetapkan format biner hingga batas.  Parameter <code>length</code> menentukan jumlah byte yang akan dibaca.  Parameter <code>length</code> dapat berupa nilai angka, atau nilai format biner yang menetapkan format nilai panjang yang muncul dan melebihi nilai yang dibaca.


## Examples

### Example #1 
Membatasi jumlah byte yang dibaca ke 2 bila membaca daftar byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Membatasi jumlah byte yang dibaca ketika membaca daftar byte ke nilai byte yang melebihi daftar.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
