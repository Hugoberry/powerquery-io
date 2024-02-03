---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Atgriež bināru formātu, kas transformēs ar citu bināro formātu nolasītās vērtības.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Atgriež bināru formātu, kas transformēs ar citu bināro formātu nolasītās vērtības.  Parametrs <code>binaryFormat</code> nosaka bināro formātu, kas tiks izmantots vērtības lasīšanai.  Ar nolasīto vērtību tiek izsaukta funkcija <code>function</code>, un tiek atgriezta transformētā vērtība.


## Examples

### Example #1 
Nolasīt baitu un pievienot tam vienu.
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
