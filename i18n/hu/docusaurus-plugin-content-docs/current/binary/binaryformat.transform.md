---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Bináris formátumot ad vissza, amely átalakítja a másik bináris formátum által olvasott értékeket.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Bináris formátumot ad vissza, amely átalakítja a másik bináris formátum által olvasott értékeket. A(z) `binaryFormat` paraméter határozza meg az érték kiolvasásához használandó bináris formátumot. A(z) `function` meghívása az érték olvasásakor történik, a visszaadott eredmény az átalakított érték.


## Examples

### Example #1
Kiolvas egy bájtot, és hozzáad egyet.
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
