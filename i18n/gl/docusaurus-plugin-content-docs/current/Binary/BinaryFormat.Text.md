---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Devolve un formato binario que le un valor de texto.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Devolve un formato binario que le un valor de texto. <code>length</code> especifica o número de bytes que descodificar ou o formato binario da lonxitude que precede o texto. O valor opcional <code>encoding</code> especifica a codificación do texto. Se non se especifica <code>encoding</code>, as marcas de orde do byte Unicode determinan a codificación. Se non hai ningunha marca de orde de byte, utilízase <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Descodificar dous bytes como texto ASCII.
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
Descodificar texto ASCII onde a lonxitude do texto en bytes aparece antes do texto como un byte.
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
