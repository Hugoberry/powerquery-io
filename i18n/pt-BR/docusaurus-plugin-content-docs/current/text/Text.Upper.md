---
title: Text.Upper
---

# Text.Upper


Converte todos os caracteres em maiúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retorna o resultado da conversão de todos os caracteres em <code>text</code> em maiúsculas. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obtenha a versão maiúscula de &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
