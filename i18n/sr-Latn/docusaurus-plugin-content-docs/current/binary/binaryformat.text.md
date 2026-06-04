---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Vraća binarni format koji čita tekstualnu vrednost.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Vraća binarni format koji čita tekstualnu vrednost. Navodi `length` broj bajtova za dekodiranje ili binarni format dužine koji prethodi tekstu. Opcionalna vrednost `encoding` navodi kodiranje teksta. Ako `encoding` nije navedeno, onda se kodiranje određuje iz Unicode oznaka redosleda bajta. Ako nema oznaka redosleda bajta, koristi se `TextEncoding.Utf8`.


## Examples

### Example #1
Dekodiranje dva bajta kao ASCII teksta.
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
Dekodiranje ASCII teksta pri čemu se dužina teksta u bajtovima pojavljuje ispred teksta kao bajt.
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
