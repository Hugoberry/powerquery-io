---
title: Text.Replace
---

# Text.Replace


## Description

Substitúe todas as ocorrencias da subcadea indicada no texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Devolve o resultado de substituír todas as ocorrencias do valor de texto <code>old</code> no valor de texto <code>text</code> co valor de texto <code>new</code>. Esta función diferencia maiúsculas de minúsculas.


## Examples

### Example #1 
Substituír todas as ocorrencias de &#34;o&#34; nunha frase con &#34;un&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
