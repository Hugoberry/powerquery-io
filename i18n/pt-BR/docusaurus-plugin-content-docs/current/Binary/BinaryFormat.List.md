---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Retorna um formato binário que lê uma sequência de itens e retorna uma lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Retorna um formato binário que lê uma sequência de itens e retorna uma <code>lista</code>.  O <code>binaryFormat</code> parâmetro especifica o formato binário de cada item.  Há três formas de determinar o número de itens lidos: <ul><li>Se o <code>countOrCondition</code> não for especificado, o formato binário será lido até que não haja mais itens.</li><li>Se o <code>countOrCondition</code> for um número, o formato binário lerá muitos itens.</li><li>Se o <code>countOrCondition</code> for uma função, essa função será invocada para cada item lido.  A função retorna verdadeiro para continuar e falso para interromper a leitura de itens.  O item final é incluído na lista.</li><li>Se o <code>countOrCondition</code> for um formato binário, a contagem de itens deverá preceder a lista e o formato especificado será usado para ler a contagem.</li></ul>


## Examples

### Example #1 
Bytes lidos até o fim dos dados.
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
Dois bytes lidos.
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
Bytes lidos até que o valor de byte seja maior ou igual a dois.
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
