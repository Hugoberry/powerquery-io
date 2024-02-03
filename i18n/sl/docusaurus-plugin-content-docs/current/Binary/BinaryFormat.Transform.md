---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Vrne dvojiško obliko, ki bo pretvorila vrednosti, ki jih bere druga dvojiška oblika.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Vrne dvojiško obliko, ki bo pretvorila vrednosti, ki jih bere druga dvojiška oblika.  Parameter <code>binaryFormat</code> določa dvojiško obliko, ki bo uporabljena za branje vrednosti.  <code>function</code> se prikliče s prebrano vrednostjo in vrne pretvorjeno vrednost.


## Examples

### Example #1 
Preberite bajt in mu dodajte ena.
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
