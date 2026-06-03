---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


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


## Remarks

Retorna um formato binário que escolhe o próximo formato binário com base em um valor que já tenha sido lido. O valor de formato binário gerado por essa função opera em fases:

-   O formato binário especificado pelo parâmetro `binaryFormat` é usado para ler um valor.
-   O valor é passado para a função choice especificada pelo parâmetro `chooseFunction`.
-   A função choice inspeciona o valor e retorna um segundo formato binário.
-   O segundo formato binário é usado para ler um segundo valor.
-   Se a função de combinação for especificada, o primeiro e o segundo valores serão passados para essa função e o valor resultante será retornado.
-   Se a função de combinação não for especificada, o segundo valor será retornado.
-   O segundo valor é retornado.

O parâmetro `type` opcional indica o tipo de formato binário que será retornado pela função choice. `type any`, `type list` ou `type binary` pode ser especificado. Se o parâmetro `type` não for especificado, `type any` será usado. Se `type list` o `type binary` for usado, o sistema poderá retornar um valor de fluxo `binary` ou `list`, em vez de um valor armazenado em buffer, o que pode reduzir a quantidade de memória necessária para ler o formato.


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
