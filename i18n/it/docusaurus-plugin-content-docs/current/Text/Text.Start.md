---
title: Text.Start
---

# Text.Start


## Description

Restituisce l&#39;inizio del testo.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Restituisce i primi <code>count</code> caratteri di <code>text</code> come valore di testo.


## Examples

### Example #1 
Ottenere i primi 5 caratteri di &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
