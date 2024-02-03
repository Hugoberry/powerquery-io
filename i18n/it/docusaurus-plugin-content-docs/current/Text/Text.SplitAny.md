---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Restituisce un elenco di valori di testo, suddiviso in base a uno dei caratteri nel delimitatore.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Restituisce un elenco di valori di testo risultante dalla suddivisione del valore di testo <code>text</code> in base a un carattere nel delimitatore specificato <code>separators</code>.


## Examples

### Example #1 
Creare un elenco dal valore di testo &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
