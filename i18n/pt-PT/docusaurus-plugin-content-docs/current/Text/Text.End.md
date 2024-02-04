---
title: Text.End
---

# Text.End


## Description

Devolve os últimos carateres do texto.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Devolve um valor <code>text</code> que corresponde aos últimos <code>count</code> carateres do valor <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obter os últimos 5 carateres do texto &#34;Olá, Mundo&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
