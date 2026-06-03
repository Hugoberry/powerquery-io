---
title: Text.At
---

# Text.At


Returnerer tegnene ved den angivne position.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Returnerer tegnet i tekstværdien, `text`, ved positionen `index`. Det første tegn i teksten er ved position 0.


## Examples

### Example #1
Find tegnet ved position 4 i strengen "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
