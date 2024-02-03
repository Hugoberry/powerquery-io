---
title: Text.Select
---

# Text.Select


## Description

Izbere vse pojavitve danega znaka ali seznama znakov iz vhodne besedilne vrednosti.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Vrne kopijo besedilne vrednosti <code>text</code>, iz katere so odstranjeni vsi znaki, ki niso v <code>selectChars</code>.  


## Examples

### Example #1 
V besedilni vrednosti izberite vse znake v območju od &#34;a&#34; do &#34;ž&#34;.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
