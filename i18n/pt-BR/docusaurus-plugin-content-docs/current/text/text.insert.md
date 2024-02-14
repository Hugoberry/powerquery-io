---
title: Text.Insert
---

# Text.Insert


Insira um valor de texto em outro na posição especificada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retorna o resultado da inserção do valor de texto <code>newText</code> no valor de texto <code>text</code> na posição <code>offset</code>. As posições começam no número 0.


## Examples

### Example #1 
Insira &#34;C&#34; entre &#34;B&#34; e &#34;D&#34; em &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
