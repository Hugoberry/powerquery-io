---
title: Text.Insert
---

# Text.Insert


## Description

Vloží jednu textovú hodnotu do inej na danej pozícii.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Vráti výsledok vloženia textovej hodnoty <code>newText</code> do textovej hodnoty <code>text</code> na pozícii <code>offset</code>. Pozície začínajú číslom 0.


## Examples

### Example #1 
Vložte znak &#34;C&#34; medzi znaky &#34;B&#34; a &#34;D&#34; v hodnote &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
