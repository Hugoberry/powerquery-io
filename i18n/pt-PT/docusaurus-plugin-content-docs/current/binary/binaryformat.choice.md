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

Devolve um formato binário que escolhe o formato binário seguinte com base num valor que já foi lido. O valor de formato binário produzido por esta função funciona por fases:

-   O formato binário especificado pelo parâmetro `binaryFormat` é utilizado para ler um valor.
-   O valor é transmitido para a função de escolha especificada pelo parâmetro `chooseFunction`.
-   A função de escolha inspeciona o valor e devolve um segundo formato binário.
-   O segundo formato binário é utilizado para ler um segundo valor.
-   Se a função de combinação for especificada, o primeiro e segundo valores são transmitidos para a função de combinação e o valor resultante é devolvido.
-   Se a função de combinação não for especificada, o segundo valor será devolvido.
-   O segundo valor é devolvido.

O parâmetro `type` opcional indica o tipo de formato binário que será devolvido pela função de escolha. Poderá ser especificado `type any`, `type list` ou `type binary`. Se o parâmetro `type` não for especificado, `type any` será utilizado. Se `type list` ou `type binary` for utilizado, o sistema poderá conseguir devolver um valor `binary` ou `list` de transmissão em fluxo em vez de um na memória intermédia, o que poderá reduzir a quantidade de memória necessária para ler o formato.


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
