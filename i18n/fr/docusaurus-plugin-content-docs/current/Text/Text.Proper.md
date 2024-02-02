---
title: Text.Proper
---

# Text.Proper


## Description

Met en majuscules la première lettre de chacun des mots.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Retourne le résultat de la mise en majuscules de la première lettre uniquement de chaque mot dans la valeur de texte <code>text</code>. Toutes les autres lettres sont retournées en minuscules. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Utilise &lt;code&gt;Text.Proper&lt;/code&gt; dans une phrase simple.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
