---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Vráti zoznam textových hodnôt rozdelený v niektorom znaku v oddeľovači.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Vráti zoznam textových hodnôt, ktorý je výsledkom rozdelenia textovej hodnoty <code>text</code> na základe niektorého znaku v stanovenom oddeľovači <code>separators</code>.


## Examples

### Example #1 
Vytvorte zoznam z textovej hodnoty &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
