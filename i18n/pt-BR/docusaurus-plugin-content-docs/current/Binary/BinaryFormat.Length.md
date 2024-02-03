---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Retorna um formato binário que limita a quantidade de dados que podem ser lidos.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Retorna um formato binário que limita a quantidade de dados que podem ser lidos. Tanto <code>BinaryFormat.List</code> quanto <code>BinaryFormat.Binary</code> podem ser usados para ler até o final dos dados. <code>BinaryFormat.Length</code> pode ser usado para limitar o número de bytes que são lidos.  O parâmetro <code>binaryFormat</code> especifica o formato binário a ser limitado.  O parâmetro <code>length</code> especifica o número de bytes a serem lidos.  O parâmetro <code>length</code> pode ser um valor numérico ou um valor de formato binário que especifica o formato do valor de comprimento que aparece antes do valor que está sendo lido.


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
