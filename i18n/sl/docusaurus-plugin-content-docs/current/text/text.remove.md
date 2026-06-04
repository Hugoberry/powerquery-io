---
title: Text.Remove
---

# Text.Remove


Odstrani vse pojavitve danega znaka ali seznama znakov iz vhodne besedilne vrednosti.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Vrne kopijo besedilne vrednosti `text`, iz katere so odstranjeni vsi znaki s položajem `removeChars`.


## Examples

### Example #1
Odstranite znaka","in";"iz besedilne vrednosti.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
