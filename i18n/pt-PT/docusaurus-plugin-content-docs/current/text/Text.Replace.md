---
title: Text.Replace
---

# Text.Replace


Substitui todas as ocorrências da subcadeia especificada no texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Devolve o resultado da substituição de todas as ocorrências do valor de texto <code>old</code> no valor de texto <code>text</code> pelo valor de texto <code>new</code>. Esta função é sensível às maiúsculas e minúsculas.


## Examples

### Example #1 
Substituir cada ocorrência de &#34;o&#34; numa frase por &#34;um&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
