---
title: Text.Remove
---

# Text.Remove


## Description

Odstrani vse pojavitve danega znaka ali seznama znakov iz vhodne besedilne vrednosti.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Vrne kopijo besedilne vrednosti <code>text</code>, iz katere so odstranjeni vsi znaki s položajem <code>removeChars</code>.  


## Examples

### Example #1 
Odstranite znaka &#34;,&#34; in &#34;;&#34; iz besedilne vrednosti.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
