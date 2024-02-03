---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Vrne seznam besedilnih vrednosti, ki so razdeljene v katerem koli znaku v ločilu.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Vrne seznam besedilnih vrednosti, ki nastane z razdelitvijo besedilne vrednosti <code>text</code> glede na kateri koli znak v navedenem ločilu, <code>separators</code>.


## Examples

### Example #1 
Ustvarite seznam iz besedilne vrednosti &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
