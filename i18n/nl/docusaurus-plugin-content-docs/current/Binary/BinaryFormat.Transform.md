---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Retourneert een binaire indeling die de waarden transformeert die door een andere binaire indeling zijn gelezen.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Retourneert een binaire indeling die de waarden transformeert die door een andere binaire indeling zijn gelezen.  De parameter <code>binaryFormat</code> specificeert de binaire indeling die zal worden gebruikt om de waarde te lezen.  <code>function</code> wordt aangeroepen met de gelezen waarde en retourneert de getransformeerde waarde.


## Examples

### Example #1 
Een byte lezen en hier één aan toevoegen.
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
