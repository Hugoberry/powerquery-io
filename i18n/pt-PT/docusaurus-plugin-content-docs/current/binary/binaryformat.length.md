---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Devolve um formato binário que limita a quantidade de dados que podem ser lidos.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Devolve um formato binário que limita a quantidade de dados que pode ser lida. Tanto `BinaryFormat.List` como `BinaryFormat.Binary` podem ser utilizados para ler até ao fim dos dados. `BinaryFormat.Length` pode ser utilizado para limitar o número de bytes lidos. O parâmetro `binaryFormat` especifica o formato binário a limitar. O parâmetro `length` especifica o número de bytes a ler. O parâmetro `length` pode ser um valor numérico ou um valor de formato binário que especifica o formato do valor de comprimento que precede o valor que está a ser lido.


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
