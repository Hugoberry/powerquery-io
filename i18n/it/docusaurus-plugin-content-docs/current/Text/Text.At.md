---
title: Text.At
---

# Text.At


## Description

Restituisce il carattere nella posizione specificata.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Restituisce il carattere nel valore di testo <code>text</code> nella posizione <code>index</code>. Il primo carattere nel testo è nella posizione 0.


## Examples

### Example #1 
Trovare il carattere nella posizione 4 nella stringa &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
