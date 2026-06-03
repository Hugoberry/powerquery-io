---
title: Text.Insert
---

# Text.Insert


Voegt één tekstwaarde in een andere tekstwaarde op de opgegeven positie in.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retourneert het resultaat van het invoegen van tekstwaarde `newText` in de tekstwaarde `text` op positie `offset`. De positie begint bij nummer 0.


## Examples

### Example #1
"C" invoegen tussen "B" en "D" in "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
