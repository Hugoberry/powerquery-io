---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Taikomas kiekvienas \{ old, new \} pakeitimas.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Atliekami nurodyti sąrašo `list` pakeitimai. Pakeitimo operaciją `replacements` sudaro dviejų reikšmių – senosios ir naujosios – sąrašas. Pasirenkama lygties kriterijų reikšmė, `equationCriteria`, gali būti nurodyta norint valdyti lygybės bandymą.


## Examples

### Example #1
Sukurkite sąrašą iš \{1, 2, 3, 4, 5\} pakeisdami reikšmę 5 reikšme -5, o reikšmę 1 – reikšme -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
