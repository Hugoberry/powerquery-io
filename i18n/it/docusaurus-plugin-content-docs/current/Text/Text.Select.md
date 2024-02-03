---
title: Text.Select
---

# Text.Select


## Description

Seleziona tutte le occorrenze del carattere o dell&#39;elenco di caratteri specificato dal valore di testo di input.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Restituisce una copia del valore di testo <code>text</code> con tutti i caratteri non presenti in <code>selectChars</code> rimossi.  


## Examples

### Example #1 
Seleziona tutti i caratteri compresi tra &#39;a&#39; e &#39;z&#39; dal valore di testo.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
