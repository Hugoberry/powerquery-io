---
title: Text.Range
---

# Text.Range


Devuelve la subcadena encontrada en el desplazamiento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devuelve la subcadena del texto `text` que se encuentra en el desplazamiento `offset`. Se puede incluir un parámetro opcional (`count`) para especificar el número de caracteres que tienen que devolverse. Produce un error si no hay suficientes caracteres.


## Examples

### Example #1
Buscar la subcadena del texto "Hola mundo" que empieza en el índice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Buscar la subcadena del texto "Hola mundo Hola" que empieza en el índice 6 y abarca 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
