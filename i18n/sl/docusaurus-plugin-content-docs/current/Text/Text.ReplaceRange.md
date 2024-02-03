---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Vrne rezultat odstranitve števila znakov, <code>count</code>, iz besedilne vrednosti <code>text</code> z začetkom na položaju <code>offset</code> in vstavljanja besedilne vrednosti <code>newText</code> na enakem položaju v <code>text</code>.


## Examples

### Example #1 
Zamenjajte en znak na položaju 2 v besedilni vrednosti &#34;ABGF&#34; z novo besedilno vrednostjo &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
