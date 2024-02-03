---
title: Text.End
---

# Text.End


## Description

Retorna el darrer caràcter del text.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Retorna un valor de <code>text</code> format pels darrers <code>count</code> caràcters del valor de <code>text</code>, <code>text</code>.


## Examples

### Example #1 
Obté els darrers 5 caràcters del text &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
