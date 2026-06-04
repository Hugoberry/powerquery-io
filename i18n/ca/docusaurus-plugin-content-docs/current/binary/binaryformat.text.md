---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Retorna un format binari que llegeix un valor de text.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Retorna un format binari que llegeix un valor de text. El valor `length` especifica el nombre de bytes que es descodificaran o el format binari de la longitud que precedeix el text. El valor opcional `encoding` especifica la codificació del text. Si no s'especifica `encoding`, la codificació es determina des de les marques d'ordre de bytes Unicode. Si no hi ha cap marca d'ordre de bytes present, s'utilitza `TextEncoding.Utf8`.


## Examples

### Example #1
Descodifica dos bytes com a text ASCII.
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
Descodifica text ASCII en què la longitud del text en bytes apareix abans del text com a byte.
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
