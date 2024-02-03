---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Vráti binárny formát, ktorý transformuje hodnoty prečítané iným binárnym formátom.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Vráti binárny formát, ktorý transformuje hodnoty prečítané iným binárnym formátom.  Parameter <code>binaryFormat</code> určuje binárny formát, ktorý sa použije na prečítanie hodnoty.  Funkcia <code>function</code> sa vyvolá s prečítanou hodnotou a vráti transformovanú hodnotu.


## Examples

### Example #1 
Prečítajte bajt a pripočítajte k nemu hodnotu jeden.
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
