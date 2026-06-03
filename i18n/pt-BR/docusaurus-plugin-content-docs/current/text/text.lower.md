---
title: Text.Lower
---

# Text.Lower


Converte todos os caracteres em minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retorna o resultado da conversão de todos os caracteres em `text` em minúsculas. Um `culture` opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obtenha a versão minúscula de "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
