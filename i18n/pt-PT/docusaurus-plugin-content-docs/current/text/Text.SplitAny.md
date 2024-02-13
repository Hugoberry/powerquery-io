---
title: Text.SplitAny
---

# Text.SplitAny


Devolve uma lista de valores de texto dividida em qualquer um dos carateres no delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Devolve uma lista de valores de texto resultante da divisão de um valor de texto <code>text</code> com base em qualquer caráter existente no delimitador especificado, <code>separators</code>.


## Examples

### Example #1 
Criar uma lista a partir do valor de texto &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
