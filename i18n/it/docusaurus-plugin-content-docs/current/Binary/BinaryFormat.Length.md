---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Restituisce un formato binario che limita la quantità di dati che possono essere letti.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Restituisce un formato binario che limita la quantità di dati che possono essere letti.  <code>BinaryFormat.List</code> e <code>BinaryFormat.Binary</code> possono essere utilizzati per leggere fino alla fine dei dati.  <code>BinaryFormat.Length</code> può essere utilizzato per limitare il numero di byte che vengono letti.  Il parametro <code>binaryFormat</code> specifica il formato binario da limitare.  Il parametro <code>length</code> specifica il numero di byte da leggere.  Il parametro <code>length</code> può essere un valore numerico o un valore di formato binario che specifica il formato del valore della lunghezza presente che precede il valore letto.


## Examples

### Example #1 
Limitare a 2 il numero di byte letti quando si legge un elenco di byte.
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
Consente di limitare il numero di byte letti nell&#39;ambito della lettura di un elenco di byte al valore di byte che precede l&#39;elenco.
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
