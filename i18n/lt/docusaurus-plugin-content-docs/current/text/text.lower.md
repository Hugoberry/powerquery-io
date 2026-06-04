---
title: Text.Lower
---

# Text.Lower


Visi simboliai konvertuojami į mažąsias raides.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Pateikiamas visų `text` simbolių konvertavimo į mažąsias raides rezultatas. Taip pat gali būti pateiktas pasirinktinis `culture` (pavyzdžiui, „en-US“).


## Examples

### Example #1
Gaukite „AbCd“ mažųjų raidžių versiją.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
