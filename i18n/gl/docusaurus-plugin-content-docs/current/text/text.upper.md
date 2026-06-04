---
title: Text.Upper
---

# Text.Upper


Converte todos os caracteres en maiúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Devolve o resultado de converter todos os caracteres de `text` en maiúsculas. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obter a versión en maiúsculas de "aBcD".
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
