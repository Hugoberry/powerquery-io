---
title: Text.Lower
---

# Text.Lower


Converte tutti i caratteri in minuscolo.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Restituisce il risultato della conversione in minuscolo di tutti i caratteri in `text`. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT".


## Examples

### Example #1
Ottenere la versione in minuscolo di "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
