---
title: Text.End
---

# Text.End


Returnerer de sidste tegn i teksten.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returnerer en værdi af typen `text`, der er det sidste `count`\-tegn i værdien `text` `text`.


## Examples

### Example #1
Hent de sidste fem tegn i teksten "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
