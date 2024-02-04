---
title: Text.Lower
---

# Text.Lower


## Description

Converte todos os carateres em minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Devolve o resultado da conversão de todos os carateres em <code>text</code> para minúsculas. Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").


## Examples

### Example #1 
Obter a versão em minúsculas de &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
