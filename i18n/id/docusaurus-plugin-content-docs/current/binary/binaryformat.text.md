---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Menghasilkan format biner yang membaca nilai teks.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Menghasilkan format biner yang membaca nilai teks. `length` akan menetapkan jumlah byte yang dikodekan, atau format biner sepanjang yang melebihi teks. Nilai `encoding` opsional akan menetapkan pengodean teks. Jika `encoding` tidak ditetapkan, maka pengodean akan ditentukan dari tanda urutan byte Unicode. Jika tanda urutan byte tidak ada, maka `TextEncoding.Utf8` akan digunakan.


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
