---
title: Text.Lower
---

# Text.Lower


## Description

Converte todos os caracteres em minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Retorna o resultado da conversão de todos os caracteres em <code>text</code> em minúsculas. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Obtenha a versão minúscula de &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
