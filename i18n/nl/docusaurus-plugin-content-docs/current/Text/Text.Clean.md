---
title: Text.Clean
---

# Text.Clean


Hiermee wordt de tekstwaarde geretourneerd waaruit alle stuurcodes zijn verwijderd.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Hiermee wordt een tekstwaarde geretourneerd waaruit alle stuurcodes van <code>text</code> zijn verwijderd.


## Examples

### Example #1 
Verwijder regelinvoertekens en andere stuurcodes uit een tekstwaarde.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
