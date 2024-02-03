---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Vraća listu tekstualnih vrednosti, podeljenu kod bilo kog znaka u okviru znaka za razgraničavanje.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Vraća listu tekstualnih vrednosti koje nastaju kao rezultat podele tekstualne vrednosti <code>text</code> na osnovu bilo kog znaka u okviru navedenog znaka za razgraničavanje, <code>separators</code>.


## Examples

### Example #1 
Kreiranje liste od tekstualne vrednosti „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com“.
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
