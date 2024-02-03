---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Devolve unha lista de valores de texto, dividido por calquera dos caracteres do delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Devolve unha lista de valores de texto resultantes da división dun valor de texto <code>text</code> baseándose nun carácter do delimitador especificado, <code>separators</code>.


## Examples

### Example #1 
Cre unha lista do valor de texto &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
