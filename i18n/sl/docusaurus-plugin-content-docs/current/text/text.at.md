---
title: Text.At
---

# Text.At


Vrne znak na navedenem položaju.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Vrne znak v besedilni vrednosti `text` na položaju `index`. Prvi znak v besedilu je na položaju 0.


## Examples

### Example #1
Poiščite znak s položajem 4 v nizu"Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
