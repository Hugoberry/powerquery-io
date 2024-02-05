---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Returnerar ett binärformat som transformerar värdena som ett annat binärformat läser.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Returnerar ett binärformat som transformerar värdena som ett annat binärformat läser. Parametern <code>binaryFormat</code> anger binärformatet som används för att läsa värdet. <code>function</code> anropas med det lästa värdet och returnerar det transformerade värdet.


## Examples

### Example #1 
Läs en byte och addera en till den.
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
