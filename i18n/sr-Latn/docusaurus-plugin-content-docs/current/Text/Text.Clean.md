---
title: Text.Clean
---

# Text.Clean


## Description

Vraća tekstualnu vrednost iz koje su uklonjeni svi kontrolni znakovi.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Vraća tekstualnu vrednost iz koje su uklonjeni svi kontrolni znakovi iz <code>text</code>.


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
