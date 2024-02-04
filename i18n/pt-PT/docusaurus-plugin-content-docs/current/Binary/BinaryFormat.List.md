---
title: BinaryFormat.List
---

# BinaryFormat.List


## Description

Devolve um formato binário que lê uma sequência de itens e devolve uma lista.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Details

Devolve um formato binário que lê uma sequência de itens e devolve uma <code>lista</code>. O parâmetro <code>binaryFormat</code> especifica o formato binário de cada item. Existem três formas de determinar o número de itens lidos: <ul><li>Se <code>countOrCondition</code> não for especificado(a), o formato binário fará a leitura até não existirem mais itens.</li><li>Se <code>countOrCondition</code> for um número, o formato binário fará a leitura desse número de itens.</li><li>Se <code>countOrCondition</code> for uma função, essa função será invocada para cada item lido. A função devolve true para continuar e false para parar a leitura de itens. O item final é incluído na lista.</li><li>Se <code>countOrCondition</code> for um formato binário, espera-se que a contagem de itens preceda a lista e o formato especificado é utilizado para ler a contagem.</li></ul>


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
