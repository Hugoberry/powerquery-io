---
title: Text.Start
---

# Text.Start


Retorna o início do texto.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Retorna os <code>count</code> primeiros caracteres de <code>text</code> como um valor de texto.


## Examples

### Example #1 
Obtenha os cinco primeiros caracteres de &#34;Olá, Mundo&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
