---
title: Text.Proper
---

# Text.Proper


## Description

Converte in maiuscolo la prima lettera di ogni parola.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Restituisce il risultato della conversione in maiuscolo solo della prima lettera di ogni parola nel valore di testo <code>text</code>. Tutte le altre lettere vengono restituite in minuscolo. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Utilizzare &lt;code&gt;Text.Proper&lt;/code&gt; in una frase semplice.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
