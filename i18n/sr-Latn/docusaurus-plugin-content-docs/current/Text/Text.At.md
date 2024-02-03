---
title: Text.At
---

# Text.At


## Description

Vraća znak koji se nalazi na navedenom položaju.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Vraća znak iz tekstualne vrednosti <code>text</code>, koji se nalazi na položaju <code>index</code>. Prvi znak u tekstu se nalazi na položaju 0.


## Examples

### Example #1 
Pronalaženje znaka na položaju 4 u okviru niske „Hello, World“.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
