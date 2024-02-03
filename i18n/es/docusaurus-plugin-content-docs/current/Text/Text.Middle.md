---
title: Text.Middle
---

# Text.Middle


## Description

Devuelve una subcadena hasta una longitud concreta.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Devuelve <code>count</code> caracteres o hasta el final de <code>text</code>; en el desplazamiento <code>start</code>.


## Examples

### Example #1 
Encuentra la subcadena del texto &#34;Hello World&#34;, comenzando en el índice 6 y abarcando 5 caracteres.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Encuentra la subcadena del texto &#34;Hello World&#34;, comenzando en el índice 6 y abarcando hasta el final.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
