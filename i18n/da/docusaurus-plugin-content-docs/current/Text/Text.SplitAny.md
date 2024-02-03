---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Returnerer en liste over tekstværdier, hvor tegnene er opdelt ved hjælp af afgrænseren.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Returnerer en liste over tekstværdier som et resultat af at opdele en tekstværdi <code>text</code> ved hjælp af et hvilket som helst tegn i den angivne afgrænser, <code>separators</code>.


## Examples

### Example #1 
Opret en liste ud fra tekstværdien &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
