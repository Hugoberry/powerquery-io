---
title: Text.Insert
---

# Text.Insert


## Description

Insire un valor de texto noutro nunha posición determinada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Devolve o resultado de inserir o valor de texto <code>newText</code> no valor de texto único <code>text</code> na posición <code>offset</code>. As posicións comezan no número 0.


## Examples

### Example #1 
Insira &#34;C&#34; entre &#34;B&#34; e &#34;D&#34; en &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
