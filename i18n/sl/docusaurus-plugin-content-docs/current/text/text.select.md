---
title: Text.Select
---

# Text.Select


Izbere vse pojavitve danega znaka ali seznama znakov iz vhodne besedilne vrednosti.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Vrne kopijo besedilne vrednosti `text`, iz katere so odstranjeni vsi znaki, ki niso v `selectChars`.


## Examples

### Example #1
V besedilni vrednosti izberite vse znake v območju od"a"do"ž".
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
