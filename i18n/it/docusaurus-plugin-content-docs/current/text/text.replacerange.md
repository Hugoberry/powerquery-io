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

Restituisce il risultato della rimozione del numero di caratteri <code>count</code> dal valore di testo <code>text</code> a partire dalla posizione <code>offset</code> e quindi dell'inserimento del valore di testo <code>newText</code> nella stessa posizione in <code>text</code>.


## Examples

### Example #1 
Sostituire un singolo carattere nella posizione 2 nel valore di testo &#34;ABGF&#34; con il nuovo valore di testo &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
