---
title: Text.Clean
---

# Text.Clean


Vrne besedilno vrednost, iz katere so odstranjeni vsi krmilni znaki.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Vrne besedilno vrednost, iz katere so odstranjeni vsi krmilni znaki `text`.


## Examples

### Example #1
Iz besedilne vrednosti odstranite pomike v novo vrstico in druge krmilne znake.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
