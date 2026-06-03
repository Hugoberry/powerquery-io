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

Retorna o resultado da substituição de todas as ocorrências do valor de texto `old` no valor de texto `text` pelo valor de texto `new`. Essa função diferencia maiúsculas de minúsculas.


## Examples

### Example #1
Substitua cada ocorrência de "o" em uma frase por "um.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
