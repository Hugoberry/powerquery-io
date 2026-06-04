---
title: Text.Replace
---

# Text.Replace


Substitúe todas as ocorrencias da subcadea indicada no texto.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Devolve o resultado de substituír todas as ocorrencias do valor de texto `old` no valor de texto `text` co valor de texto `new`. Esta función diferencia maiúsculas de minúsculas.


## Examples

### Example #1
Substituír todas as ocorrencias de "o" nunha frase con "un".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
