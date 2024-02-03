---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Returnerer et binært format, der transformerer værdier, der er læst af et andet binært format.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Returnerer et binært format, der transformerer værdier, der er læst af et andet binært format.  Parameteren <code>binaryFormat</code> angiver det binære format, som bruges til at læse værdien.  <code>function</code> kaldes med den læste værdi og returnerer den transformerede værdi.


## Examples

### Example #1 
Læs en byte, og føj én til den.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
