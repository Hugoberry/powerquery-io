---
title: Text.At
---

# Text.At


Vrátí znak na zadané pozici.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Vrátí znak v textové hodnotě `text` na pozici `index`. První znak textu je na pozici 0.


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
