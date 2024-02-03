---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Vrátí binární formát, který transformuje hodnoty přečtené jiným binárním formátem.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Vrátí binární formát, který transformuje hodnoty přečtené jiným binárním formátem. Parametr <code>binaryFormat</code> určuje binární formát, který bude použit ke čtení hodnoty. Funkce <code>function</code> volána s přečtenou hodnotou a vrátí transformovanou hodnotu.


## Examples

### Example #1 
Číst bajt a přidat k němu jeden další
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
