---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Retorna um formato binário que lê um valor de texto.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Retorna um formato binário que lê um valor de texto. O `length` especifica o número de bytes a decodificar ou o formato binário do comprimento que precede o texto. O valor opcional `encoding` especifica a codificação do texto. Se o `encoding` não for especificado, a codificação será determinada a partir das marcas de ordem de byte Unicode. Se nenhuma marca de ordem de byte estiver presente, então `TextEncoding.Utf8` será usado.


## Examples

### Example #1
Decodifique dois bytes como texto ASCII.
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
Decodifique o texto ASCII em que o comprimento do texto em bytes aparece antes do texto como um byte.
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
