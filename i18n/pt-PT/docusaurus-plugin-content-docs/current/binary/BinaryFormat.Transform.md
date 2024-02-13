---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Devolve um formato binário que irá transformar os valores lidos por outro formato binário.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Devolve um formato binário que irá transformar os valores lidos por outro formato binário.  O parâmetro <code>binaryFormat</code> especifica o formato binário que será utilizado para ler o valor.  O <code>function</code> é invocado com o valor lido e devolve o valor transformado.


## Examples

### Example #1 
Ler um byte e adicionar outro ao mesmo.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
