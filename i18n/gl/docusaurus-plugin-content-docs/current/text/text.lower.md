---
title: Text.Lower
---

# Text.Lower


Converte todos os caracteres en minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado de converter todos os caracteres de `text` en minúsculas. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obter a versión en minúsculas de "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
