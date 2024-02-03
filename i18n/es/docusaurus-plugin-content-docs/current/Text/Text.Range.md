---
title: Text.Range
---

# Text.Range


## Description

Devuelve la subcadena encontrada en el desplazamiento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Devuelve la subcadena del texto <code>text</code> que se encuentra en el desplazamiento <code>offset</code>.    Se puede incluir un parámetro opcional (<code>count</code>) para especificar el número de caracteres que tienen que devolverse. Genera un error si no hay suficientes caracteres.


## Examples

### Example #1 
Buscar la subcadena del texto &#34;Hola mundo&#34; que empieza en el índice 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Buscar la subcadena del texto &#34;Hola mundo Hola&#34; que empieza en el índice 6 y abarca 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
