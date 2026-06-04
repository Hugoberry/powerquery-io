---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Devolve un formato binario que limita a cantidade de datos que se poden ler.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Devolve un formato binario que limita a cantidade de datos que se poden ler. Tanto `BinaryFormat.List` como `BinaryFormat.Binary` pódense usar para ler ata o final dos datos. `BinaryFormat.Length` pódese usar para limitar o número de bytes que se len. O parámetro `binaryFormat` especifica o formato binario que se vai limitar. O parámetro `length` especifica o número de bytes que se van ler. O parámetro `length` pode ser un valor numérico ou un valor de formato binario que especifica o formato do valor de lonxitude que aparece antes do valor que se está lendo.


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
