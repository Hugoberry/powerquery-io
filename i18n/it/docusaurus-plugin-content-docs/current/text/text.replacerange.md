---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Rimuove un intervallo di caratteri e inserisce un nuovo valore nella posizione specificata.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Restituisce il risultato della rimozione del numero di caratteri `count` dal valore di testo `text` a partire dalla posizione `offset` e quindi dell'inserimento del valore di testo `newText` nella stessa posizione in `text`.


## Examples

### Example #1
Sostituire un singolo carattere nella posizione 2 nel valore di testo "ABGF" con il nuovo valore di testo "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
