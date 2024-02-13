---
title: Text.Trim
---

# Text.Trim


Remove qualquer espaço em branco à direita e à esquerda.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna o resultado da remoção de todos os espaços em branco à esquerda e à direita do valor de texto <code>text</code>.


## Examples

### Example #1 
Remova o espaço em branco à esquerda e à direita de &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
