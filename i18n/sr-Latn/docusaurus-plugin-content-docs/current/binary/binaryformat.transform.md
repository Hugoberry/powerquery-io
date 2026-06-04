---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Vraća binarni format koji će transformisati vrednosti koje je pročitao drugi binarni format.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Vraća binarni format koji će transformisati vrednosti koje je pročitao drugi binarni format. Parametar `binaryFormat` navodi binarni format koji će se koristiti za čitanje vrednosti. `function` se poziva pomoću pročitane vrednosti, a vraća transformisanu vrednost.


## Examples

### Example #1
Čitanje bajta i dodavanje još jednog.
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
