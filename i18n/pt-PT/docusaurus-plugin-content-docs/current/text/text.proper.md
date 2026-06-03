---
title: Text.Proper
---

# Text.Proper


Coloca em maiúsculas a primeira letra de cada palavra.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado da colocação em maiúsculas apenas da primeira letra de cada palavra no valor de texto `text`. Todas as outras letras são devolvidas em minúsculas. Pode também ser fornecida uma `culture` opcional (por exemplo, "en-US").


## Examples

### Example #1
Utilizar `Text.Proper` numa frase simples.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
