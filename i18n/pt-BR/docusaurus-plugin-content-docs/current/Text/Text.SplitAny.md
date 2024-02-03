---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Retorna uma lista de valores de texto, divididos em qualquer caractere do delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Retorna uma lista de valores de texto resultantes da divisão de um valor de texto <code>text</code> com base em qualquer caractere no delimitador especificado, <code>separators</code>.


## Examples

### Example #1 
Crie uma lista a partir do valor de texto &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
