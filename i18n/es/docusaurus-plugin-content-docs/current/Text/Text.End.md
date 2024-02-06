---
title: Text.End
---

# Text.End


Devuelve el último carácter del texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Devuelve un valor <code>text</code> que son los últimos <code>count</code> caracteres del valor <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obtener los 5 caracteres últimos del texto &#34;Hola mundo&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
