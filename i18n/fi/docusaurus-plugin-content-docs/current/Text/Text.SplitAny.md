---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Palauttaa tekstiarvoluettelon, joka on jaettu osiin jokaisen erottimen merkin kohdalta.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Palauttaa tekstiarvoluettelon, joka on tuloksena tekstiarvon <code>text</code> jakamisesta osiin määritetyn erottimen <code>separators</code> jokaisen merkin perusteella.


## Examples

### Example #1 
Luo luettelo tekstiarvosta &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
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
