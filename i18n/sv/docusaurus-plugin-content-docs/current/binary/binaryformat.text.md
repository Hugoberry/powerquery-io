---
title: BinaryFormat.Text
---

# BinaryFormat.Text


Returnerar ett binärformat som läser ett textvärde.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Remarks

Returnerar ett binärformat som läser ett textvärde. `length` anger hur många byte som ska avkodas eller binärformatet för längden som föregår texten. Det valfria värdet `encoding` anger textens kodning. Om `encoding` inte anges fastställs kodningen baserat på Unicode-byteordningsmärken. Om det inte finns några byteordningsmärken används `TextEncoding.Utf8`.


## Examples

### Example #1
Avkoda två byte som ASCII-text.
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
Avkoda ASCII-text där längden på texten i byte visas före texten som en byte.
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
