---
title: Text.Proper
---

# Text.Proper


Pon en maiúscula a primeira letra de cada palabra.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado de pasar a maiúsculas só a primeira letra de cada palabra no valor de texto `text`. Todas as outras letras devólvense en minúsculas. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Utilizar `Text.Proper` nunha frase simple.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
