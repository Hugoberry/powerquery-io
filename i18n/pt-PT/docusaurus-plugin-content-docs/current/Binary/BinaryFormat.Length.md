---
title: BinaryFormat.Length
---

# BinaryFormat.Length


## Description

Devolve um formato binário que limita a quantidade de dados que podem ser lidos.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Details

Devolve um formato binário que limita a quantidade de dados que podem ser lidos.  Tanto <code>BinaryFormat.List</code> como <code>BinaryFormat.Binary</code> podem ser utilizados para ler até ao fim dos dados.  <code>BinaryFormat.Length</code> pode ser utilizado para limitar o número de bytes que são lidos.  O parâmetro <code>binaryFormat</code> especifica o formato binário a limitar.  O parâmetro <code>length</code> especifica o número de bytes a ler.  O parâmetro <code>length</code> pode ser um valor numérico ou um valor de formato binário que especifica o formato do valor de comprimento que precede o valor a ser lido.


## Examples

### Example #1 
Limitar o número de bytes lidos a 2 ao ler uma lista de bytes.
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
Limitar o número de bytes lidos, durante a leitura de uma lista de bytes, ao valor de bytes que precede a lista.
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
