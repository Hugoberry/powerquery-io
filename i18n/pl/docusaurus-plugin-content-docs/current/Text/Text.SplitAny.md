---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Zwraca listę wartości tekstowych powstałą w wyniku wykonania podziału przy dowolnym ze znaków w ograniczniku.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Zwraca listę wartości tekstowych powstałą w wyniku wykonania podziału wartości tekstowej <code>text</code> przy użyciu dowolnego ze znaków w określonym ograniczniku <code>separators</code>.


## Examples

### Example #1 
Utwórz listę na podstawie wartości tekstowej „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com”.
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
