---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Udáva, či niektoré riadky v tabuľke spĺňajú danú podmienku.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Udáva, či niektoré riadky v tabuľke `table` spĺňajú danú podmienku `condition`. Vráti hodnotu `true`, ak sa niektoré riadky zhodujú, inak vráti hodnotu `false`.


## Examples

### Example #1
Určte, či sú niektoré hodnoty riadkov v stĺpci \[a\] párne v tabuľke `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Určte, či niektoré hodnoty riadkov sú \[a = 1, b = 2\] v tabuľke `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
