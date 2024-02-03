---
title: Text.At
---

# Text.At


## Description

Vrátí znak na zadané pozici.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Vrátí znak v textové hodnotě <code>text</code> na pozici <code>index</code>. První znak textu je na pozici 0.


## Examples

### Example #1 
Najde v řetězci „Hello, World“ znak na pozici 4.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
