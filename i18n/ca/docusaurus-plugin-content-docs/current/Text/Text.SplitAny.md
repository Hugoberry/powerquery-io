---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Retorna una llista de valors de text, dividit en qualsevol dels caràcters del delimitador.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Retorna una llista de valors de text que resulta de dividir un valor de text <code>text</code> basant-se en qualsevol caràcter del delimitador especificat, <code>separators</code>.


## Examples

### Example #1 
Crea una llista a partir del valor de text &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
