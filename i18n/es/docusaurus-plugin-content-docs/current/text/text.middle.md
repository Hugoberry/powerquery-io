---
title: Text.Middle
---

# Text.Middle


Devuelve una subcadena hasta una longitud concreta.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Devuelve `count` caracteres o hasta el final de `text`; en el desplazamiento `start`.


## Examples

### Example #1
Encuentra la subcadena del texto "Hello World", comenzando en el índice 6 y abarcando 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Encuentra la subcadena del texto "Hello World", comenzando en el índice 6 y abarcando hasta el final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Busque la substring del texto "Hola mundo" a partir del índice 0 que abarca 2 caracteres.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
