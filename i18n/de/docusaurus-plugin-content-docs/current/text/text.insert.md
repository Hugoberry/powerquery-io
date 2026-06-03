---
title: Text.Insert
---

# Text.Insert


Fügt einen Textwert an einer angegebenen Position in einen anderen Textwert ein.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Gibt das Ergebnis zurück, das entsteht, wenn der Textwert "`newText`" an der Position `offset` in den Textwert "`text`" eingefügt wird. Positionen beginnen bei 0.


## Examples

### Example #1
Fügt "C" zwischen "B" und "D" in "ABD" ein.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
