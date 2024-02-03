---
title: Text.Insert
---

# Text.Insert


## Description

Inserta un valor de texto en otro en una posición especificada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Devuelve el resultado de insertar el valor de texto <code>newText</code> en el valor de texto <code>text</code> en la posición <code>offset</code>. Las posiciones empiezan en el número 0.


## Examples

### Example #1 
Insertar &#34;C&#34; entre &#34;B&#34; y &#34;D&#34; en &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
