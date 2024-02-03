---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Szöveges értéket olvasó bináris formátumot ad vissza.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Szöveges értéket olvasó bináris formátumot ad vissza. A(z) <code>length</code> megadja a dekódolandó bájtok számát, illetve a szöveg előtti hosszúság bináris formátumát. A választható <code>encoding</code> érték a szöveg kódolását adja meg. Ha a(z) <code>encoding</code> nincs megadva, akkor a Unicode bájtsorrendjelzők határozzák meg a kódolást. Ha nincsenek bájtsorrendjelzők, akkor a <code>TextEncoding.Utf8</code> használható.


## Examples

### Example #1 
ASCII-szövegként dekódol két bájtot.
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
ASCII-szöveget dekódol, amelyben a szöveg hosszúsága bájtban szerepel a bájtban megadott szöveg előtt.
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
