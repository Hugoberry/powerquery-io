---
title: BinaryFormat.List
---

# BinaryFormat.List


Retourneert een binaire indeling die een reeks items leest en een lijst retourneert.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Retourneert een binaire indeling die een reeks items leest en een `list` retourneert. De parameter `binaryFormat` specificeert de binaire indeling van elk item. Er zijn drie manieren voor het vaststellen van het aantal items dat wordt gelezen:

-   Als de `countOrCondition` niet is opgegeven, leest de binaire indeling tot er geen items meer zijn.
-   Als de `countOrCondition` een getal is, leest de binaire indeling dat aantal items.
-   Als de `countOrCondition` een functie is, dan wordt die functie aangeroepen voor elk item dat wordt gelezen. De functie retourneert de waarde 'true' op om door te gaan en 'false' om met het lezen van items te stoppen. Het laatste item staat in de lijst.
-   Als de `countOrCondition` een binaire indeling is, dan wordt verwacht dat het aantal items aan de lijst voorafgaat en dat de opgegeven indeling wordt gebruikt om dit aantal te lezen.


## Examples

### Example #1
Bytes lezen tot het einde van de gegevens.
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
Twee bytes lezen.
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
Bytes lezen tot de bytewaarde groter is dan of gelijk is aan twee.
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
