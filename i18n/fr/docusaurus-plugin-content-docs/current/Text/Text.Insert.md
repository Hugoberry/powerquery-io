---
title: Text.Insert
---

# Text.Insert


## Description

Insère une valeur de texte dans une autre, à une position spécifiée.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Retourne le résultat de la valeur de texte insérée <code>newText</code> dans la valeur de texte <code>text</code>, à la position <code>offset</code>. Les positions commencent au numéro 0.


## Examples

### Example #1 
Insérez &#34; C &#34; entre &#34; B &#34; et &#34; D &#34; dans &#34; ABD &#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
