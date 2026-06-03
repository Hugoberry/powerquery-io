---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Fjerner et tegnområde og indsætter en ny værdi ved en angivet position.


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

Returnerer resultatet af at fjerne et antal tegn, `count`, fra tekstværdien `text` med start ved position `offset` og indsætter derefter tekstværdien `newText` på samme position i `text`.


## Examples

### Example #1
Erstat et enkelt tegn ved position 2 i tekstværdien "ABGF" med den nye tekstværdi "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
