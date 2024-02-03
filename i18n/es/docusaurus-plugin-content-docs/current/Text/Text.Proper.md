---
title: Text.Proper
---

# Text.Proper


## Description

Pone en mayúsculas la primera letra de cada palabra.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Devuelve el resultado de poner en mayúsculas solo la primera letra de cada palabra en el valor de texto <code>text</code>. El resto de las letras se devuelven en minúsculas. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Usar &lt;code&gt;Text.Proper&lt;/code&gt; en una frase simple.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
