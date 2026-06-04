---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Retorna un format binari que transformarà els valors llegits per un altre format binari.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Retorna un format binari que transformarà els valors llegits per un altre format binari. El paràmetre `binaryFormat` especifica el format binari que s'utilitzarà per llegir el valor. El valor `function` s'invoca amb el valor llegir i retorna el valor transformat.


## Examples

### Example #1
Llegeix un byte i afegeix-n'hi un.
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
