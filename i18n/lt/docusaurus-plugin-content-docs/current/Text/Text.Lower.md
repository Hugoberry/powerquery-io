---
title: Text.Lower
---

# Text.Lower


## Description

Visi simboliai konvertuojami į mažąsias raides.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Pateikiamas visų <code>text</code> simbolių konvertavimo į mažąsias raides rezultatas. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


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
