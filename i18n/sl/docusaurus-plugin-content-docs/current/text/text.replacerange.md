---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Odstrani obseg znakov in vstavi novo vrednost na navedenem položaju.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Vrne rezultat odstranitve števila znakov, `count`, iz besedilne vrednosti `text` z začetkom na položaju `offset` in vstavljanja besedilne vrednosti `newText` na enakem položaju v `text`.


## Examples

### Example #1
Zamenjajte en znak na položaju 2 v besedilni vrednosti"ABGF"z novo besedilno vrednostjo"CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
