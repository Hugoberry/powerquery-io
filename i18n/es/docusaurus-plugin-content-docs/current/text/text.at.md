---
title: Text.At
---

# Text.At


Devuelve el carácter en la posición especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Devuelve el carácter en el valor de texto `text`, en la posición `index`. El primer carácter del texto está en la posición 0.


## Examples

### Example #1
Buscar el carácter en la posición 4 de la cadena "Hola mundo".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
