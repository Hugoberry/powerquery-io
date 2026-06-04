---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Devolve un formato binario que transformará os valores lidos por outro formato binario.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Devolve un formato binario que transformará os valores lidos por outro formato binario. O parámetro `binaryFormat` especifica o formato binario que se vai utilizar para ler un valor. Invócase `function` co valor lido e devolve o valor transformado.


## Examples

### Example #1
Ler un byte e engadir un a el.
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
