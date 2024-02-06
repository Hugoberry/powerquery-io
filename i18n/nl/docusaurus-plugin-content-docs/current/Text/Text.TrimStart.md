---
title: Text.TrimStart
---

# Text.TrimStart


Verwijdert alle voorloopspaties.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourneert het resultaat van het verwijderen van alle voorloopspaties uit de tekstwaarde <code>text</code>.


## Examples

### Example #1 
Voorloopspaties verwijderen uit &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
