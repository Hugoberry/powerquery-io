---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Returnerar ett binärformat som läser en sekvens med objekt och returnerar en lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Returnerar ett binärformat som läser en sekvens med objekt och returnerar en <code>lista</code>. Parametern <code>binaryFormat</code> anger binärformatet för varje objekt. Det går att fastställa antalet objekt som läses på tre sätt: <ul><li>Om <code>countOrCondition</code> inte anges läser binärformatet tills det inte finns fler objekt.</li><li>Om <code>countOrCondition</code> är ett tal läser binärformatet så många objekt.</li><li>Om <code>countOrCondition</code> är en funktion anropas den funktionen för varje läst objekt. Funktionen returnerar true för att fortsätta och false för att sluta läsa objekt. Det sista objektet tas med i listan.</li><li>Om <code>countOrCondition</code> är ett binärformat förväntas uppräkningen av objekt föregå listan, och det angivna formatet används för att läsa antalet.</li></ul>


## Examples

### Example #1 
Läs byte till slutet av data.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Läs två byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Läs byte tills bytevärdet är större än eller lika med två.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
