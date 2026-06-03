---
title: Text.Upper
---

# Text.Upper


Converte tutti i caratteri in maiuscolo.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Restituisce il risultato della conversione in maiuscolo di tutti i caratteri in `text`. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT".


## Examples

### Example #1
Ottenere la versione in maiuscolo di "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
