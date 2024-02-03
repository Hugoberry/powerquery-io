---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Vrne dvojiško obliko, ki omeji količino podatkov, ki jo je mogoče prebrati.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Vrne dvojiško obliko, ki omeji količino podatkov, ki jo je mogoče prebrati.  Tako <code>BinaryFormat.List</code> kot <code>BinaryFormat.Binary</code> se lahko uporabi za branje do konca podatkov. <code>BinaryFormat.Length</code> je lahko uporabljen za omejitev števila bajtov, ki so prebrani. Parameter <code>binaryFormat</code> določa dvojiško obliko za omejitev. Parameter <code>length</code> določa število bajtov za branje. Parameter <code>length</code> je lahko številska vrednost ali vrednost dvojiške oblike, ki določa obliko prikazane vrednosti dolžine, ki je pred vrednostjo za branje.


## Examples

### Example #1 
Pri branju seznama bajtov omejite število prebranih bajtov na 2.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Pri branju seznama bajtov omejite število prebranih bajtov na vrednost bajtov pred seznamom.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
