---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Devuelve un formato binario que lee un valor de texto.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Devuelve un formato binario que lee un valor de texto.  El <code>length</code> especifica el número de bytes para decodificar o el formato binario de la longitud que antecede al texto.  El valor opcional <code>encoding</code> especifica la codificación del texto.  Si no se especifica <code>encoding</code>, la codificación se determina a partir de las marcas BOM Unicode.  Si no hay ninguna marca BOM, se usa <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Descodifique dos bytes como texto ASCII.
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
Decodificar texto ASCII cuando la longitud del texto en bytes aparezca antes que el texto como un byte.
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
