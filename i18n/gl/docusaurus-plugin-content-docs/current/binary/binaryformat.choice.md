---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Devolve un formato binario que escolle o seguinte formato binario baseándose nun valor que xa se leu.


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

Devolve un formato binario que escolle o seguinte formato binario baseándose nun valor que xa se leu. O valor do formato binario producido por esta función funciona en fases:

-   O formato binario especificado polo parámetro `binaryFormat` utilízase para ler un valor.
-   O valor pásase á función de selección especificada polo parámetro `chooseFunction`.
-   A función de selección inspecciona o valor e devolve un segundo formato binario.
-   O segundo formato binario utilízase para ler un segundo valor.
-   Se se especifica a función de combinación, entón o primeiro e o segundo valor transmítense á función de combinación e devólvese o valor resultante.
-   Se non se especifica a función de combinación, devólvese o segundo valor.
-   Devólvese o segundo valor.

O parámetro opcional `type` indica o tipo de formato binario que a función de selección vai devolver. Pode especificarse `type any`, `type list` ou `type binary`. Se non se especifica o parámetro `type`, entón utilízase `type any`. Se se utiliza `type list` ou `type binary`, entón o sistema pode devolver un valor `binary` ou `list` de transmisión en secuencia en vez de un do búfer, o que pode reducir a cantidade de memoria necesaria para ler o formato.


## Examples

### Example #1
Lea unha lista de bytes, onde o número de elementos está determinado polo primeiro byte.
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
Lea unha lista de bytes, onde o número de elementos está determinado polo primeiro byte e mantén o primeiro byte lido.
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
Lea unha lista de bytes, onde o número de elementos está determinado polo primeiro byte utilizando unha lista de transmisión en secuencia.
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
