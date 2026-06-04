---
title: Text.Clean
---

# Text.Clean


Vraća tekstualnu vrednost iz koje su uklonjeni svi kontrolni znakovi.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Vraća tekstualnu vrednost iz koje su uklonjeni svi kontrolni znakovi iz `text`.


## Examples

### Example #1
Uklonite znakove za položaj u sledećem redu i druge kontrolne znakove iz tekstualne vrednosti.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
