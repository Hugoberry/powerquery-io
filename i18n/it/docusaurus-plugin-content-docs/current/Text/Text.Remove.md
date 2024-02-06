---
title: Text.Remove
---

# Text.Remove


Rimuove tutte le occorrenze del carattere o dell&#39;elenco di caratteri specificato dal valore di testo di input.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Restituisce una copia del valore di testo <code>text</code> con tutti i caratteri da <code>removeChars</code> rimosso.  


## Examples

### Example #1 
Rimuovere i caratteri , e ; dal valore di testo.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
