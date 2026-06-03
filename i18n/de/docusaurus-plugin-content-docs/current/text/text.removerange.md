---
title: Text.RemoveRange
---

# Text.RemoveRange


Entfernt die angegebene Anzahl von Zeichen ab dem angegebenen Offset.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Gibt eine Kopie des Textwerts "`text`" zurück, in der alle Zeichen ab Position `offset` entfernt wurden. Die Anzahl der zu entfernenden Zeichen kann mithilfe des optionalen Parameters "`count`" angegeben werden. Der Standardwert von "`count`" lautet 1. Positionswerte beginnen bei 0.


## Examples

### Example #1
Entfernt an Position 2 ein Zeichen aus dem Textwert "ABEFC".
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Entfernt ab Position 2 zwei Zeichen aus dem Textwert "ABEFC"
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
