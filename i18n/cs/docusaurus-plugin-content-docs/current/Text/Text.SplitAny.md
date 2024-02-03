---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Vrátí seznam textových hodnot rozdělený libovolnými znaky v oddělovači.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Vrátí seznam textových hodnot, který je výsledkem rozdělení textové hodnoty <code>text</code> na základě libovolného znaku v zadaném oddělovači <code>separators</code>.


## Examples

### Example #1 
Vytvoří seznam z textové hodnoty „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com“.
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
