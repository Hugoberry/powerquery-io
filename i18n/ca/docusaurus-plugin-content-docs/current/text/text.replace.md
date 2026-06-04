---
title: Text.Replace
---

# Text.Replace


Substitueix totes les aparicions de la subcadena donada al text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Retorna el resultat de substituir totes les aparicions del valor de text `old` al valor de text `text` pel valor de text `new`. Aquesta funció distingeix entre majúscules i minúscules.


## Examples

### Example #1
Substitueix totes les aparicions de "the" d'una frase per "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
