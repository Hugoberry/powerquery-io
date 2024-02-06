---
title: Text.Replace
---

# Text.Replace


Substitui todas as ocorrências da subcadeia de caracteres especificada no texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Retorna o resultado da substituição de todas as ocorrências do valor de texto <code>old</code> no valor de texto <code>text</code> pelo valor de texto <code>new</code>. Essa função diferencia maiúsculas de minúsculas.


## Examples

### Example #1 
Substitua cada ocorrência de &#34;o&#34; em uma frase por &#34;um.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
