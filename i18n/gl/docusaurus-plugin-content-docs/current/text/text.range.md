---
title: Text.Range
---

# Text.Range


Devolve a subcadea localizada no desprazamento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devolve a subcadea do texto `text` localizada no desprazamento `offset`. O parámetro opcional `count` pódese incluír para especificar o número de caracteres que se van devolver. Xera un erro se non hai caracteres suficientes.


## Examples

### Example #1
Buscar a subcadea do texto "Ola, Mundo" comezando no índice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Buscar a subcadea do texto "Ola, Mundo, Ola" comezando no índice 6 expandindo 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
