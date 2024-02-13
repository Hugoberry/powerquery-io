---
title: Text.Remove
---

# Text.Remove


Verwijdert alle instanties van het opgegeven teken of de opgeven lijst met tekens uit de invoertekstwaarde.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Retourneert een kopie van de tekstwaarde <code>text</code> waarbij alle tekens vanaf <code>removeChars</code> worden verwijderd.  


## Examples

### Example #1 
De tekens , en ; verwijderen uit de tekstwaarde.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
