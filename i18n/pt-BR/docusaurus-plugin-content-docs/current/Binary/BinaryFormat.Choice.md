---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Retorna um formato binário que escolhe o próximo formato binário com base em um valor que já tenha sido lido.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Retorna um formato binário que escolhe o próximo formato binário com base em um valor que já tenha sido lido.  O valor de formato binário gerado por essa função opera em fases:<ul><li>O formato binário especificado pelo parâmetro <code>binaryFormat</code> é usado para ler um valor.</li><li>O valor é passado para a função choice especificada pelo parâmetro <code>chooseFunction</code>.</li><li>A função choice inspeciona o valor e retorna um segundo formato binário.</li><li>O segundo formato binário é usado para ler um segundo valor.</li><li>Se a função de combinação for especificada, o primeiro e o segundo valores serão passados para essa função e o valor resultante será retornado.</li><li>Se a função de combinação não for especificada, o segundo valor será retornado.</li><li>O segundo valor é retornado.</li></ul>O parâmetro <code>type</code> opcional indica o tipo de formato binário que será retornado pela função choice.  <code>type any</code>, <code>type list</code> ou <code>type binary</code> pode ser especificado.  Se o parâmetro <code>type</code> não for especificado, <code>type any</code> será usado.   Se <code>type list</code> o <code>type binary</code> for usado, o sistema poderá retornar um valor de fluxo <code>binary</code> ou <code>list</code>, em vez de um valor armazenado em buffer, o que pode reduzir a quantidade de memória necessária para ler o formato.


## Examples

### Example #1 
Leia uma lista de bytes onde o número de elementos é determinado pelo primeiro byte.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
Leia uma lista de bytes em que o número de elementos seja determinado pelo primeiro byte e preserve o primeiro byte lido.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
Leia uma lista de bytes em que o número de elementos seja determinado pelo primeiro byte usando uma lista de fluxo.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
