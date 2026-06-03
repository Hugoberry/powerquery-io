---
title: Text.End
---

# Text.End


Retorna os últimos caracteres do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Retorna um valor `text` que representa os `count` últimos caracteres do valor `text` `text`.


## Examples

### Example #1
Obtenha os cinco últimos caracteres do texto "Olá, Mundo".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
