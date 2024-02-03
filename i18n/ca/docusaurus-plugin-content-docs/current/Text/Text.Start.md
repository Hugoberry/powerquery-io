---
title: Text.Start
---

# Text.Start


## Description

Retorna l&#39;inici del text.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Retorna els primers <code>count</code> caràcters de <code>text</code> com a valor de text.


## Examples

### Example #1 
Obté els primers 5 caràcters de &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
