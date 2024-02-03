---
title: Text.Lower
---

# Text.Lower


## Description

Converte tutti i caratteri in minuscolo.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Restituisce il risultato della conversione in minuscolo di tutti i caratteri in <code>text</code>. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Ottenere la versione in minuscolo di &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
