---
title: Text.Insert
---

# Text.Insert


## Description

Vstavi eno besedilno vrednost v drugo na danem položaju.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Vrne rezultat vstavljanja besedilne vrednosti <code>newText</code> v besedilno vrednost <code>text</code> na položaju <code>offset</code>. Položaji se začnejo s številom 0.


## Examples

### Example #1 
Vstavite &#34;C&#34; med &#34;B&#34; in &#34;D&#34; v &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
