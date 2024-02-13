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

Returnerer resultatet af at fjerne et antal tegn, <code>count</code>, fra tekstværdien <code>text</code> med start ved position <code>offset</code> og indsætter derefter tekstværdien <code>newText</code> på samme position i <code>text</code>.


## Examples

### Example #1 
Erstat et enkelt tegn ved position 2 i tekstværdien &#34;ABGF&#34; med den nye tekstværdi &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
