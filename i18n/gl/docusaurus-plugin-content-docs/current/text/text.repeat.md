---
title: Text.Repeat
---

# Text.Repeat


Devolve un valor de texto composto polo texto de entrada repetido un número de veces especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Devolve un valor de texto composto polo texto de entrada `text` repetido `count` veces.


## Examples

### Example #1
Repetir o texto "a" cinco veces.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Repetir o texto "olamundo" tres veces.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
