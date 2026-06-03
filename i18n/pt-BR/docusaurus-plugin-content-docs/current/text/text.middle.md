---
title: Text.Middle
---

# Text.Middle


Retorna a subcadeia de caracteres até um comprimento específico.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Retorna `count` caracteres, ou até o final de `text`; no deslocamento `start`.


## Examples

### Example #1
Encontre a subcadeia de caracteres no texto "Olá Mundo" iniciando no índice 6 abrangendo 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Encontre a subcadeia de caracteres no texto "Olá Mundo" iniciando no índice 6 até o final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Localize a substring de caracteres do texto "Olá, Mundo" começando no índice 0, abrangendo 2 caracteres.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
