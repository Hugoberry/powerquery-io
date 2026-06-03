---
title: Text.End
---

# Text.End


Devuelve el último carácter del texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Devuelve un valor `text` que son los últimos `count` caracteres del valor `text` `text`.


## Examples

### Example #1
Obtener los 5 caracteres últimos del texto "Hola mundo".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
