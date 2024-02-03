---
title: Text.Upper
---

# Text.Upper


## Description

Converte tutti i caratteri in maiuscolo.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Restituisce il risultato della conversione in maiuscolo di tutti i caratteri in <code>text</code>. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Ottenere la versione in maiuscolo di &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
