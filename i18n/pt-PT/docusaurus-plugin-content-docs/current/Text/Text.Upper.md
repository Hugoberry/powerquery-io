---
title: Text.Upper
---

# Text.Upper


## Description

Converte todos os carateres em maiúsculas.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Devolve o resultado da conversão de todos os carateres em <code>text</code> para maiúsculas. Pode também ser fornecida uma <code>culture</code> opcional (por exemplo, "en-US").


## Examples

### Example #1 
Obter a versão em maiúsculas de &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
