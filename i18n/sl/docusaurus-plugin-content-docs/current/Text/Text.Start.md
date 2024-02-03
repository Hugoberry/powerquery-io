---
title: Text.Start
---

# Text.Start


## Description

Vrne začetek besedila.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Vrne prvih <code>count</code> znakov besedila <code>text</code> kot besedilno vrednost.


## Examples

### Example #1 
Poiščite prvih 5 znakov besedila &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
