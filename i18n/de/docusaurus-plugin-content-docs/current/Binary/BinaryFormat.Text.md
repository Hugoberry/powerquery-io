---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Gibt ein Binärformat zurück, das einen Textwert liest.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Gibt ein Binärformat zurück, das einen Textwert liest.  <code>length</code> gibt die Anzahl von Bytes zum Decodieren an, oder das Binärformat der Länge, die dem Text vorausgeht.  Der optionale Wert <code>encoding</code> gibt die Codierung des Texts an.  Ohne Angabe von <code>encoding</code> wird die Codierung anhand der Unicode-Bytereihenfolge-Marken bestimmt.  Sind keine Bytereihenfolge-Marken vorhanden, wird <code>TextEncoding.Utf8</code> verwendet.


## Examples

### Example #1 
Decodiert zwei Bytes als ASCII-Text.
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
Decodieren Sie ASCII-Text, in dem die Länge des Texts in Bytes vor dem Text als Byte angezeigt wird.
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
