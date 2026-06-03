---
title: Text.Select
---

# Text.Select


Seleziona tutte le occorrenze del carattere o dell'elenco di caratteri specificato dal valore di testo di input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Restituisce una copia del valore di testo `text` con tutti i caratteri non presenti in `selectChars` rimossi.


## Examples

### Example #1
Seleziona tutti i caratteri compresi tra 'a' e 'z' dal valore di testo.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
