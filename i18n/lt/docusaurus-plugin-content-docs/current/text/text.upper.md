---
title: Text.Upper
---

# Text.Upper


Visi simboliai konvertuojami į didžiąsias raides.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Pateikiamas visų `text` simbolių konvertavimo į didžiąsias raides rezultatas. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite „aBcD“ didžiųjų raidžių versiją.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
