---
title: Text.RemoveRange
---

# Text.RemoveRange


Verwijdert een aantal tekens vanaf de opgegeven verschuiving.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Hiermee wordt een kopie geretourneerd van de tekstwaarde `text` met waarbij tekens van positie `offset` zijn verwijderd. Een optionele parameter, `count` kan worden gebruikt voor het opgeven van het aantal tekens dat moet worden verwijderd. De standaardwaarde van `count` is 1. Positiewaarden beginnen bij 0.


## Examples

### Example #1
Eén teken verwijderen uit de tekstwaarde "ABEFC" op positie 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Twee tekens verwijderen uit de tekstwaarde "ABEFC", te beginnen bij positie 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
