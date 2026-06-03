---
title: Text.Insert
---

# Text.Insert


Indsætter én tekstværdi i en anden på en angivet position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returnerer resultatet af at indsætte tekstværdien `newText` i tekstværdien `text` på position `offset`. Positioner starter ved tallet 0.


## Examples

### Example #1
Indsæt "C" mellem "B" og "D" i "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
