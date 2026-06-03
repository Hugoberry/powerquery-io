---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Restituisce un formato binario che limita la quantità di dati che possono essere letti.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Restituisce un formato binario che limita la quantità di dati che possono essere letti. Sia `BinaryFormat.List` che `BinaryFormat.Binary` possono essere usati per leggere fino alla fine dei dati. `BinaryFormat.Length` può essere usato per limitare il numero di byte letti. Il parametro `binaryFormat` specifica il formato binario da limitare. Il parametro `length` specifica il numero di byte da leggere. Il parametro `length` può essere un valore numerico o un valore in formato binario che specifica il formato del valore della lunghezza presente che precede il valore letto.


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
Consente di limitare il numero di byte letti nell'ambito della lettura di un elenco di byte al valore di byte che precede l'elenco.
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
