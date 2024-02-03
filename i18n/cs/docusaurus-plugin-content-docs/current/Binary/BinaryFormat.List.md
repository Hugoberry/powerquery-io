---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Vrátí binární formát, který čte sekvenci položek a vrátí seznam.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Vrátí binární formát, který čte sekvenci položek a vrátí <code>list</code>. Parametr <code>binaryFormat</code> určuje binární formát každé položky. Jsou tři způsoby, jak lze určit počet čtených položek: <ul><li>Pokud <code>countOrCondition</code> není zadáno, bude binární formát číst položky, dokud nezbudou žádné další.</li><li>Pokud <code>countOrCondition</code> je číslo, binární formát načte tento počet položek.</li><li>Pokud <code>countOrCondition</code> je funkce, bude tato funkce volána při každém čtení položky. Funkce vrací hodnotu true, pokud se má v čtení pokračovat, nebo false, pokud se má se čtením položek skončit. Poslední položka je do seznamu zahrnuta.</li><li>Pokud <code>countOrCondition</code> je binární formát, pak počet položek má být uveden před seznamem a zadaný formát se používá k načtení daného počtu položek.</li></ul>


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
