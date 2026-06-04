---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Vrne dvojiško obliko, ki bere besedilno vrednost.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Vrne dvojiško obliko, ki bere besedilno vrednost. `length` določa število bajtov za dekodiranje ali dvojiško obliko dolžine pred besedilom. Izbirna vrednost `encoding` določa kodiranje besedila. Če vrednost `encoding` ni določena, je kodiranje določeno na podlagi oznak za vrstni red bajtov Unicode. Če ni oznak za vrstni red bajtov, je uporabljen `TextEncoding.Utf8`.


## Examples

### Example #1
Dekodirajte dva bajta kot besedilo ASCII.
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
Dekodirajte besedilo ASCII, kjer se dolžina besedila v bajtih prikaže pred besedilom kot bajt.
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
