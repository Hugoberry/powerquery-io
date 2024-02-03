---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

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


## Details

Devolve un formato binario que escolle o seguinte formato binario baseándose nun valor que xa se leu.  O valor do formato binario producido por esta función funciona en fases: <ul><li>O formato binario especificado polo parámetro <code>binaryFormat</code> utilízase para ler un valor.</li><li>O valor pásase á función de selección especificada polo parámetro <code>chooseFunction</code>.</li><li>A función de selección inspecciona o valor e devolve un segundo formato binario.</li><li>O segundo formato binario utilízase para ler un segundo valor.</li><li>Se se especifica a función de combinación, entón o primeiro e o segundo valor transmítense á función de combinación e devólvese o valor resultante.</li><li>Se non se especifica a función de combinación, devólvese o segundo valor.</li><li>Devólvese o segundo valor.</li></ul>O parámetro opcional <code>type</code> indica o tipo de formato binario que a función de selección vai devolver.  Pode especificarse <code>type any</code>, <code>type list</code> ou <code>type binary</code>.  Se non se especifica o parámetro <code>type</code>, entón utilízase <code>type any</code>.   Se se utiliza <code>type list</code> ou <code>type binary</code>, entón o sistema pode devolver un valor <code>binary</code> ou <code>list</code> de transmisión en secuencia en vez de un do búfer, o que pode reducir a cantidade de memoria necesaria para ler o formato.


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
