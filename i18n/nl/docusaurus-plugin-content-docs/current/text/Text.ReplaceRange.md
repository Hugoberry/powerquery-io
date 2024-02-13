---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Verwijdert een bereik met tekens en voegt een nieuwe waarde op een opgegeven positie in.


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

Retourneert het resultaat van het verwijderen van een aantal tekens, <code>count</code>, vanuit tekstwaarde <code>text</code>, te beginnen bij positie <code>offset</code> en voegt vervolgens de tekstwaarde <code>newText</code> op dezelfde positie in <code>text</code> in.


## Examples

### Example #1 
Een enkel teken op positie 2 in tekstwaarde &#34;ABGF&#34; vervangen door de nieuwe tekstwaarde &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
