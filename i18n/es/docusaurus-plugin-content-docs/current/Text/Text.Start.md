---
title: Text.Start
---

# Text.Start


## Description

Devuelve el inicio del texto.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Devuelve los primeros <code>count</code> caracteres de <code>text</code> como un valor de texto.


## Examples

### Example #1 
Obtener los primeros 5 caracteres de &#34;Hola mundo&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
