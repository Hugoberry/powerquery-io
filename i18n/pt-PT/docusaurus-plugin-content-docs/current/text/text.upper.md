---
title: Text.Upper
---

# Text.Upper


Converte todos os carateres em maiúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado da conversão de todos os carateres em `text` para maiúsculas. Pode também ser fornecida uma `culture` opcional (por exemplo, "en-US").


## Examples

### Example #1
Obter a versão em maiúsculas de "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
