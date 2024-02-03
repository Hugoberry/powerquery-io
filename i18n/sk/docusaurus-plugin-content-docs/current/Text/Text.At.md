---
title: Text.At
---

# Text.At


## Description

Vráti znak na zadanej pozícii.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Vráti znak v textovej hodnote <code>text</code> na pozícii <code>index</code>. Prvý znak v texte je na pozícii 0.


## Examples

### Example #1 
Nájdite znak na pozícii 4 v reťazci &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
