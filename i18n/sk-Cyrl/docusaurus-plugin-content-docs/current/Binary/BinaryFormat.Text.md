---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Vráti binárny formát, ktorý prečíta textovú hodnotu.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Vráti binárny formát, ktorý prečíta textovú hodnotu.  Parameter <code>length</code> určuje počet bajtov určených na dekódovanie alebo binárny formát s dĺžkou, ktorá predchádza text.  Voliteľná hodnota <code>encoding</code> určuje kódovanie textu.  Ak parameter <code>encoding</code> nie je zadaný, potom kódovanie sa určí zo značiek poradia bajtov kódu Unicode.  Ak nie sú prítomné žiadne značky poradia bajtov, potom sa použije kódovanie <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Dekódujte dva bajty ako text ASCII.
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
Dekódujte text ASCII, v ktorom sa dĺžka textu v bajtoch zobrazuje pred textom ako bajt.
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
