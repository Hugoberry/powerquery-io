---
title: Text.Upper
---

# Text.Upper


## Description

Converte todos os caracteres en maiúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Devolve o resultado de converter todos os caracteres de <code>text</code> en maiúsculas. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obter a versión en maiúsculas de &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
