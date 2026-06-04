---
title: Text.End
---

# Text.End


Vrne zadnje znake besedila.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Vrne `text` vrednost, ki predstavlja zadnjih `count` znakov `text` vrednosti `text`.


## Examples

### Example #1
Poiščite zadnjih 5 znakov besedila"Hello, World".
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
