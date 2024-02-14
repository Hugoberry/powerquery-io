---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Returnerer et binært format, der læser en tekstværdi.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Returnerer et binært format, der læser en tekstværdi.  <code>length</code> angiver antallet af byte, der skal afkodes, eller det binære format af den længde, der står foran teksten.  Den valgfrie værdi <code>encoding</code> angiver kodningen af teksten.  Hvis <code>encoding</code> ikke er angivet, bestemmes kodningen ud fra de Unicode-baserede byterækkefølgemærker.  Hvis der ikke findes nogen byterækkefølgemærker, bruges <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Afkod to byte som ASCII-tekst.
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
Afkod ASCII-tekst, hvor længden af teksten i byte står foran teksten som en byte.
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
