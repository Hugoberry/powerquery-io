---
title: Text.Proper
---

# Text.Proper


## Description

Posa en majúscula la primera lletra de cada paraula.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Retorna el resultat de convertir a majúscules només la primera lletra de cada paraula al valor de text <code>text</code>. La resta de lletres es retornen en minúscules. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").


## Examples

### Example #1 
Utilitza &lt;code&gt;Text.Proper&lt;/code&gt; en una única frase.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
