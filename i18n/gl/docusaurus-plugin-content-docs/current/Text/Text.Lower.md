---
title: Text.Lower
---

# Text.Lower


## Description

Converte todos os caracteres en minúsculas.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Devolve o resultado de converter todos os caracteres de <code>text</code> en minúsculas. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obter a versión en minúsculas de &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
