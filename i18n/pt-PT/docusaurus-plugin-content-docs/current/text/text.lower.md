---
title: Text.Lower
---

# Text.Lower


Converte todos os carateres em minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado da conversão de todos os carateres em `text` para minúsculas. Pode também ser fornecida uma `culture` opcional (por exemplo, "en-US").


## Examples

### Example #1
Obter a versão em minúsculas de "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
