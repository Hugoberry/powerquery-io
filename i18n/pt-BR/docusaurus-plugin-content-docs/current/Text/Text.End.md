---
title: Text.End
---

# Text.End


## Description

Retorna os últimos caracteres do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Retorna um valor <code>text</code> que representa os <code>count</code> últimos caracteres do valor <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obtenha os cinco últimos caracteres do texto &#34;Olá, Mundo&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
