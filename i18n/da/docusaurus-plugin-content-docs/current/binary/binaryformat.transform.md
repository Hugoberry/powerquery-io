---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Returnerer et binært format, der transformerer værdier, der er læst af et andet binært format.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Returnerer et binært format, der transformerer værdier, der er læst af et andet binært format. Parameteren `binaryFormat` angiver det binære format, som bruges til at læse værdien. `function` kaldes med den læste værdi og returnerer den transformerede værdi.


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
