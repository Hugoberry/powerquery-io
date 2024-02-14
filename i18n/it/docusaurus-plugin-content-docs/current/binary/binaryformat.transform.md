---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Restituisce un formato binario che trasformerà i valori letti da un altro formato binario.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Restituisce un formato binario che trasformerà i valori letti da un altro formato binario.  Il parametro <code>binaryFormat</code> specifica il formato binario che verrà utilizzato per leggere il valore.  <code>function</code> viene richiamato con il valore letto e restituisce il valore trasformato.


## Examples

### Example #1 
Leggere un byte e aggiungerne uno ad esso.
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
