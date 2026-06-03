---
title: Text.Proper
---

# Text.Proper


Converte in maiuscolo la prima lettera di ogni parola.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Restituisce il risultato della conversione in maiuscolo solo della prima lettera di ogni parola nel valore di testo `text`. Tutte le altre lettere vengono restituite in minuscolo. È anche possibile specificare un valore `culture` facoltativo, ad esempio "it-IT".


## Examples

### Example #1
Utilizzare `Text.Proper` in una frase semplice.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
