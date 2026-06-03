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

Devolve o resultado da substituição de todas as ocorrências do valor de texto `old` no valor de texto `text` pelo valor de texto `new`. Esta função é sensível às maiúsculas e minúsculas.


## Examples

### Example #1
Substituir cada ocorrência de "o" numa frase por "um".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
