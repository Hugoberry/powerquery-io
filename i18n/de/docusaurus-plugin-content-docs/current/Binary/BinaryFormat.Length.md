---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Gibt ein Binärformat zurück, das die zu lesende Datenmenge einschränkt.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Gibt ein Binärformat zurück, das die lesbare Datenmenge einschränkt.  Sowohl mit <code>BinaryFormat.List</code> als auch mit <code>BinaryFormat.Binary</code> kann bis zum Ende der Daten gelesen werden.  Mit <code>BinaryFormat.Length</code> kann die Anzahl der zu lesenden Bytes eingeschränkt werden.  Der Parameter <code>binaryFormat</code> gibt das einzuschränkende Binärformat an.  Der Parameter <code>length</code> gibt die Anzahl der zu lesenden Bytes an.  Der Parameter <code>length</code> kann entweder ein Zahlenwert oder ein Binärformatwert sein, der das Format des angezeigten Längenwerts angibt, der dem gelesenen Wert vorausgeht.


## Examples

### Example #1 
Beschränkt die Anzahl der zu lesenden Bytes beim Lesen einer Liste mit Bytes auf zwei.
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
Schränken Sie die Anzahl der gelesenen Byte beim Lesen einer Liste von Bytes auf den Byte-Wert ein, welcher der Liste vorausgeht.
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
