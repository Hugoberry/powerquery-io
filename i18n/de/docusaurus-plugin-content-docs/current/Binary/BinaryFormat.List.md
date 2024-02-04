---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Gibt ein Binärformat zurück, das eine Reihe von Elementen liest und eine Liste zurückgibt.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Gibt ein Binärformat zurück, das eine Reihe von Elementen liest und ein <code>list</code>-Element zurückgibt.  Der Parameter <code>binaryFormat</code> gibt das Binärformat der einzelnen Elemente an.  Die Anzahl der zu lesenden Elemente kann auf drei Arten bestimmt werden: <ul><li>Ohne Angabe von <code>countOrCondition</code> liest das Binärformat so lange, bis keine weiteren Elemente vorhanden sind.</li><li>Ist <code>countOrCondition</code> eine Zahl, werden entsprechend viele Elemente gelesen.</li><li>Ist <code>countOrCondition</code> eine Funktion, wird diese für jedes gelesene Element aufgerufen.  Die Funktion gibt "true" zurück, um den Vorgang fortzusetzen, oder "false", um das Lesen von Elementen zu beenden.  Das finale Element ist in der Liste enthalten.</li><li>Wenn <code>countOrCondition</code> ein Binärformat ist, wird erwartet, dass die Anzahl der Elemente der Liste vorausgeht, und das angegebene Format wird zum Lesen der Anzahl verwendet.</li></ul>


## Examples

### Example #1 
Liest Bytes bis zum Ende der Daten.
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
Liest zwei Bytes.
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
Liest Bytes, bis der Bytewert größer oder gleich zwei ist.
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
