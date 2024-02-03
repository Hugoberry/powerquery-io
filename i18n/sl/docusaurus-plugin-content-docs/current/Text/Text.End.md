---
title: Text.End
---

# Text.End


## Description

Vrne zadnje znake besedila.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Vrne <code>text</code> vrednost, ki predstavlja zadnjih <code>count</code> znakov <code>text</code> vrednosti <code>text</code>.


## Examples

### Example #1 
Poiščite zadnjih 5 znakov besedila &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
