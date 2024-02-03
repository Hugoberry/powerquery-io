---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Devolve un formato binario que limita a cantidade de datos que se poden ler.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Devolve un formato binario que limita a cantidade de datos que se poden ler. Pódense utilizar <code>BinaryFormat.List</code> e <code>BinaryFormat.Binary</code> para ler até a fin dos datos. Pódese utilizar <code>BinaryFormat.Length</code> para limitar o número de bytes lidos. O parámetro <code>binaryFormat</code> especifica o formato binario que limitar. O parámetro <code>length</code> especifica o número de bytes que ler. O parámetro <code>length</code> pode ser un valor numérico ou un valor de formato binario que especifica o formato do valor de lonxitude que aparece e que precede o valor que se vai ler.


## Examples

### Example #1 
Limite o número de bytes lidos a 2 ao ler unha lista de bytes.
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
Limitar o número de bytes lidos ao ler unha lista de bytes ao valor do byte anterior na lista.
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
