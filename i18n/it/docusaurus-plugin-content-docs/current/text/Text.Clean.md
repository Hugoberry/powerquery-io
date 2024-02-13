---
title: Text.Clean
---

# Text.Clean


Restituisce il valore di testo con tutti i caratteri di controllo rimossi.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Restituisce un valore di testo con tutti i caratteri di controllo di <code>text</code> rimossi.


## Examples

### Example #1 
Rimuovere gli avanzamenti riga e altri caratteri di controllo da un valore di testo.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
