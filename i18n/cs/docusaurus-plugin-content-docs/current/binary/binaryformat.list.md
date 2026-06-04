---
title: BinaryFormat.List
---

# BinaryFormat.List


Vrátí binární formát, který čte sekvenci položek a vrátí seznam.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Vrátí binární formát, který čte sekvenci položek a vrátí `list`. Parametr `binaryFormat` určuje binární formát každé položky. Jsou tři způsoby, jak lze určit počet čtených položek:

-   Pokud `countOrCondition` není zadáno, bude binární formát číst položky, dokud nezbudou žádné další.
-   Pokud `countOrCondition` je číslo, binární formát načte tento počet položek.
-   Pokud `countOrCondition` je funkce, bude tato funkce volána při každém čtení položky. Funkce vrací hodnotu true, pokud se má v čtení pokračovat, nebo false, pokud se má se čtením položek skončit. Poslední položka je do seznamu zahrnuta.
-   Pokud `countOrCondition` je binární formát, pak počet položek má být uveden před seznamem a zadaný formát se používá k načtení daného počtu položek.


## Examples

### Example #1
Číst bajty až na konec dat
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
Číst dva bajty
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
Číst bajty, dokud hodnota bajtu je vyšší nebo rovna dvěma
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
