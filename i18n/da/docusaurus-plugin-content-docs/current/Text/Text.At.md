---
title: Text.At
---

# Text.At


## Description

Returnerer tegnene ved den angivne position.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Returnerer tegnet i tekstværdien, <code>text</code>, ved positionen <code>index</code>. Det første tegn i teksten er ved position 0.


## Examples

### Example #1 
Find tegnet ved position 4 i strengen &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
