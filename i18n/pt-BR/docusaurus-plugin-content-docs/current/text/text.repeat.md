---
title: Text.Repeat
---

# Text.Repeat


Retorna um valor de texto composto pelo texto de entrada repetido um número de vezes especificado.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Retorna um valor de texto composto pelo texto de entrada `text` repetido `count` vezes.


## Examples

### Example #1
Repita o texto "a" cinco vezes.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Repita o texto "olámundo" três vezes.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
