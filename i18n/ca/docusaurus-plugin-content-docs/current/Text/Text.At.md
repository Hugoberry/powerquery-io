---
title: Text.At
---

# Text.At


## Description

Retorna el caràcter a la posició especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Retorna el caràcter del valor de text, <code>text</code>, a la posició <code>index</code>. El primer caràcter del text és a la posició 0.


## Examples

### Example #1 
Troba el caràcter de la posició 4 a la cadena &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
