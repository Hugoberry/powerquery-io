---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Vrátí binární formát, který čte textovou hodnotu.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Vrátí binární formát, který čte textovou hodnotu. Parametr `length` určuje počet bajtů k dekódování nebo binární formát o délce, která předchází textu. Volitelná hodnota `encoding` určuje kódování textu. Pokud hodnota `encoding` není zadána, kódování se určí ze značek pořadí bajtů ve formátu Unicode. Pokud nejsou přítomny žádné značky pořadí bajtů, použije se kódování `TextEncoding.Utf8`.


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
