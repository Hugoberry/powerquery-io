---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

Vrátí binární formát, který čte textovou hodnotu.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

Vrátí binární formát, který čte textovou hodnotu. Parametr <code>length</code> určuje počet bajtů k dekódování nebo binární formát o délce, která předchází textu. Volitelná hodnota <code>encoding</code> určuje kódování textu. Pokud hodnota <code>encoding</code> není zadána, kódování se určí ze značek pořadí bajtů ve formátu Unicode. Pokud nejsou přítomny žádné značky pořadí bajtů, použije se kódování <code>TextEncoding.Utf8</code>.


## Examples

### Example #1 
Dekódovat dva bajty jako text ASCII
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
Dékodovat text ASCII, kde délka textu v bajtech je uvedena jako bajt před textem
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
