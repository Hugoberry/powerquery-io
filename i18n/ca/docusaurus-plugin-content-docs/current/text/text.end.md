---
title: Text.End
---

# Text.End


Retorna el darrer caràcter del text.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Retorna un valor de `text` format pels darrers `count` caràcters del valor de `text`, `text`.


## Examples

### Example #1
Obté els darrers 5 caràcters del text "Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
