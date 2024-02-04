---
title: Text.Start
---

# Text.Start


## Description

Devolve o início do texto.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Devolve os primeiros <code>count</code> carateres de <code>text</code> como um valor de texto.


## Examples

### Example #1 
Obter os primeiros 5 carateres do texto &#34;Olá, Mundo&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
