---
title: Text.Select
---

# Text.Select


Hiermee worden alle instanties van het opgegeven teken of de lijst met tekens uit de invoertekstwaarde geselecteerd.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Hiermee wordt een kopie van de tekstwaarde <code>text</code> geretourneerd waarbij alle tekens die niet in <code>selectChars</code> voorkomen worden verwijderd.  


## Examples

### Example #1 
Alle tekens in het bereik a tot z selecteren in de tekstwaarde.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
