---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Mengembalikan format perduaan yang membaca nilai teks.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Mengembalikan format perduaan yang membaca nilai teks.  <code>length</code> menentukan bilangan bait untuk dinyahkod atau format perduaan bagi panjang yang mendahului teks.  Nilai <code>encoding</code> pilihan menentukan pengekodan teks.  Jika <code>encoding</code> tidak ditentukan, maka pengekodan ditentukan daripada tanda jujukan bait Unicode.  Jika tiada tanda jujukan bait, maka <code>TextEncoding.Utf8</code> digunakan.


## Examples

### Example #1 
Nyahkodkan dua bait sebagai teks ASCII.
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
Nyahkodkan teks ASCII yang mana panjang teks dalam bait muncul sebelum teks sebagai bait.
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
