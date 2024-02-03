---
title: Text.Insert
---

# Text.Insert


## Description

Insereix un únic valor de text en un altre en una posició donada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Retorna el resultat d'inserir el valor de text, <code>newText</code>, en el valor de text <code>text</code> a la posició <code>offset</code>. Les posicions comencen pel nombre 0.


## Examples

### Example #1 
Insereix &#34;C&#34; entre &#34;B&#34; i &#34;D&#34; a &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
