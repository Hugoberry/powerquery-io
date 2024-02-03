---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Menghasilkan format biner yang membaca nilai teks.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Menghasilkan format biner yang membaca nilai teks.  <code>length</code> akan menetapkan jumlah byte yang dikodekan, atau format biner sepanjang yang melebihi teks.  Nilai <code>encoding</code> opsional akan menetapkan pengodean teks.  Jika <code>encoding</code> tidak ditetapkan, maka pengodean akan ditentukan dari tanda urutan byte Unicode.  Jika tanda urutan byte tidak ada, maka <code>TextEncoding.Utf8</code> akan digunakan.


## Examples

### Example #1 
Mengkodekan dua byte sebagai teks ASCII.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
Mengkodekan teks ASCII dengan panjang teks dalam byte muncul sebelum teks sebagai byte.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
