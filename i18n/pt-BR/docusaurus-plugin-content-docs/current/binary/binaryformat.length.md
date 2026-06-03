---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Retorna um formato binário que limita a quantidade de dados que podem ser lidos.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Retorna um formato binário que limita a quantidade de dados que podem ser lidos. `BinaryFormat.List` e `BinaryFormat.Binary` podem ser usados para ler até o final dos dados. `BinaryFormat.Length` pode ser usado para limitar o número de bytes lidos. O parâmetro `binaryFormat` especifica o formato binário a ser limitado. O parâmetro `length` especifica o número de bytes a serem lidos. O parâmetro `length` pode ser um valor numérico ou um valor de formato binário que especifica o formato do valor de comprimento que aparece antes do valor que está sendo lido.


## Examples

### Example #1
Limite o número de bytes lido a 2 ao ler uma lista de bytes.
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
Limite o número de bytes lidos ao ler uma lista de bytes ao valor do byte que precede a lista.
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
