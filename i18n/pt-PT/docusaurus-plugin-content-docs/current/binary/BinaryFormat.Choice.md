---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Devolve um formato binário que escolhe o formato binário seguinte com base num valor que já foi lido.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Devolve um formato binário que escolhe o formato binário seguinte com base num valor que já foi lido.  O valor de formato binário produzido por esta função funciona por fases:<ul><li>O formato binário especificado pelo parâmetro <code>binaryFormat</code> é utilizado para ler um valor.</li><li>O valor é transmitido para a função de escolha especificada pelo parâmetro <code>chooseFunction</code>.</li><li>A função de escolha inspeciona o valor e devolve um segundo formato binário.</li><li>O segundo formato binário é utilizado para ler um segundo valor.</li><li>Se a função de combinação for especificada, o primeiro e segundo valores são transmitidos para a função de combinação e o valor resultante é devolvido.</li><li>Se a função de combinação não for especificada, o segundo valor será devolvido.</li><li>O segundo valor é devolvido.</li></ul>O parâmetro <code>type</code> opcional indica o tipo de formato binário que será devolvido pela função de escolha.  Poderá ser especificado <code>type any</code>, <code>type list</code> ou <code>type binary</code>.  Se o parâmetro <code>type</code> não for especificado, <code>type any</code> será utilizado.   Se <code>type list</code> ou <code>type binary</code> for utilizado, o sistema poderá conseguir devolver um valor <code>binary</code> ou <code>list</code> de transmissão em fluxo em vez de um na memória intermédia, o que poderá reduzir a quantidade de memória necessária para ler o formato.


## Examples

### Example #1 
Ler uma lista de bytes em que o número de elementos é determinado pelo primeiro byte.
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
Ler uma lista de bytes em que o número de elementos é determinado pelo primeiro byte e preservar o primeiro byte lido.
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
Ler uma lista de bytes em que o número de elementos é determinado pelo primeiro byte através da utilização de uma lista de transmissão em fluxo.
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
