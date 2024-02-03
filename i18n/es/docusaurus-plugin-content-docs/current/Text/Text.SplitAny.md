---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Devuelve una lista de valores de texto, dividida con alguno de los caracteres del delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Devuelve una lista de los valores de texto resultantes de dividir un valor de texto <code>text</code> según algún carácter del delimitador especificado, <code>separators</code>.


## Examples

### Example #1 
Crear una lista a partir del valor de texto “Jamie|Campbell|Administrador|Adventure Works|www.adventure-works.com”.
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
