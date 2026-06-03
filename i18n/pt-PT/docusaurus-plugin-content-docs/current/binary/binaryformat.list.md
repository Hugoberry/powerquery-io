---
title: BinaryFormat.List
---

# BinaryFormat.List


Devolve um formato binário que lê uma sequência de itens e devolve uma lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Devolve um formato binário que lê uma sequência de itens e devolve uma `lista`. O parâmetro `binaryFormat` especifica o formato binário de cada item. Existem três formas de determinar o número de itens lidos:

-   Se `countOrCondition` não for especificado(a), o formato binário fará a leitura até não existirem mais itens.
-   Se `countOrCondition` for um número, o formato binário fará a leitura desse número de itens.
-   Se `countOrCondition` for uma função, essa função será invocada para cada item lido. A função devolve true para continuar e false para parar a leitura de itens. O item final é incluído na lista.
-   Se `countOrCondition` for um formato binário, espera-se que a contagem de itens preceda a lista e o formato especificado é utilizado para ler a contagem.


## Examples

### Example #1
Ler bytes até ao fim dos dados.
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
Ler dois bytes.
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
Ler bytes até o valor de bytes ser maior ou igual a dois.
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
