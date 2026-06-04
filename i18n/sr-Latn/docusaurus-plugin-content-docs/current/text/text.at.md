---
title: Text.At
---

# Text.At


Vraća znak koji se nalazi na navedenom položaju.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Vraća znak iz tekstualne vrednosti `text`, koji se nalazi na položaju `index`. Prvi znak u tekstu se nalazi na položaju 0.


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
