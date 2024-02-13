---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Devuelve un formato binario que transformará los valores leídos por otro formato binario.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Devuelve un formato binario que transformará los valores leídos por otro formato binario.  El parámetro <code>binaryFormat</code> especifica el formato binario que se usará para leer el valor.  El <code>function</code> se invoca con el valor leído y devuelve el valor transformado.


## Examples

### Example #1 
Lea un byte y agréguele uno.
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
