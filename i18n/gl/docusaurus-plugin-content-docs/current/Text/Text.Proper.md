---
title: Text.Proper
---

# Text.Proper


## Description

Pon en maiúscula a primeira letra de cada palabra.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Devolve o resultado de pasar a maiúsculas só a primeira letra de cada palabra no valor de texto <code>text</code>. Todas as outras letras devólvense en minúsculas. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Utilizar &lt;code&gt;Text.Proper&lt;/code&gt; nunha frase simple.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
