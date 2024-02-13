---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Retorna um formato binário que transformará os valores lidos por outro formato binário.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Retorna um formato binário que transformará os valores lidos por outro formato binário.  O parâmetro <code>binaryFormat</code> especifica o formato binário que será usado para ler o valor.  O <code>function</code> é chamado com o valor lido e retorna o valor transformado.


## Examples

### Example #1 
Leia um byte e adicione-o a ele.
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
