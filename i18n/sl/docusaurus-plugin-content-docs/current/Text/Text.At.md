---
title: Text.At
---

# Text.At


## Description

Vrne znak na navedenem položaju.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Vrne znak v besedilni vrednosti <code>text</code> na položaju <code>index</code>. Prvi znak v besedilu je na položaju 0.


## Examples

### Example #1 
Poiščite znak s položajem 4 v nizu &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
