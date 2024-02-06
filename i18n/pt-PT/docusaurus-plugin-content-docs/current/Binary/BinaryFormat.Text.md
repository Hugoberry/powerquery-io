---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Devolve um formato binário que lê um valor de texto.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Devolve um formato binário que lê um valor de texto.  O <code>length</code> especifica o número de bytes a descodificar ou o formato binário do comprimento que precede o texto.  O valor <code>encoding</code> opcional especifica a codificação do texto.  Se <code>encoding</code> não for especificado, a codificação será determinada a partir das marcas de ordem de bytes Unicode.  Se não houver marcas de ordem de bytes presentes, será utilizado <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Descodificar dois bytes como texto ASCII.
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
Descodificar texto ASCII em que o comprimento do texto em bytes aparece antes do texto como um byte.
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
