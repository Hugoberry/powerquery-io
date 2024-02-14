---
title: Text.Clean
---

# Text.Clean


Returnerer tekstværdien, hvor alle kontroltegn er fjernet.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Returnerer en tekstværdi, hvor alle kontroltegnene <code>text</code> er fjernet.


## Examples

### Example #1 
Fjern linjeskift og andre kontroltegn fra en tekstværdi.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
