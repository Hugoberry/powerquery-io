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

Retourneert het resultaat van het verwijderen van een aantal tekens, `count`, vanuit tekstwaarde `text`, te beginnen bij positie `offset` en voegt vervolgens de tekstwaarde `newText` op dezelfde positie in `text` in.


## Examples

### Example #1
Een enkel teken op positie 2 in tekstwaarde "ABGF" vervangen door de nieuwe tekstwaarde "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
