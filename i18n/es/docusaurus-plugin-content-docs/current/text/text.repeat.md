---
title: Text.Repeat
---

# Text.Repeat


Devuelve un valor de texto compuesto por el texto de entrada repetido un número de veces especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Devuelve un valor de texto compuesto por el texto de entrada `text` repetido `count` veces.


## Examples

### Example #1
Repetir el texto "a" cinco veces.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Repetir el texto "holamundo" tres veces.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
