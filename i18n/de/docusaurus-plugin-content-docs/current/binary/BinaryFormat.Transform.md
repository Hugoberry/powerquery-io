---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Gibt ein Binärformat zurück, das die von einem anderen Binärformat gelesenen Werte transformiert.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Gibt ein Binärformat zurück, das die von einem anderen Binärformat gelesenen Werte transformiert.  Der Parameter "<code>binaryFormat</code>" gibt das Binärformat an, das zum Lesen des Werts verwendet wird.  "<code>function</code>" wird mit dem gelesenen Wert aufgerufen und gibt den transformierten Wert zurück.


## Examples

### Example #1 
Liest ein Byte und fügt eins hinzu.
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
