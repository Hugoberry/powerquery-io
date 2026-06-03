---
title: Text.End
---

# Text.End


Devolve os últimos carateres do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Devolve um valor `text` que corresponde aos últimos `count` carateres do valor `text` `text`.


## Examples

### Example #1
Obter os últimos 5 carateres do texto "Olá, Mundo".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
