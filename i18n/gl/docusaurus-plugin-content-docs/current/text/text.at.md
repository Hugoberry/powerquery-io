---
title: Text.At
---

# Text.At


Devolve o carácter que está na posición especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Devolve o carácter no valor de texto, `text`, que está na posición `index`. O primeiro carácter do texto que está na posición 0.


## Examples

### Example #1
Buscar o carácter que está na posición 4 na cadea "Ola, mundo".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
