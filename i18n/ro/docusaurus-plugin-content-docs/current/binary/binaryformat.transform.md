---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Returnează un format binar care va transforma valorile citite de alt format binar.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Returnează un format binar care va transforma valorile citite de alt format binar. Parametrul `binaryFormat` specifică formatul binar care va fi utilizat pentru a citi valoarea. Se invocă `function` cu valoarea citită şi returnează valoarea transformată.


## Examples

### Example #1
Citiţi un octet şi adăugaţi unul la acesta.
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
