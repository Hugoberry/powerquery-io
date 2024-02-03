---
title: Text.Upper
---

# Text.Upper


## Description

Visi simboliai konvertuojami į didžiąsias raides.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Pateikiamas visų <code>text</code> simbolių konvertavimo į didžiąsias raides rezultatas. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


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
