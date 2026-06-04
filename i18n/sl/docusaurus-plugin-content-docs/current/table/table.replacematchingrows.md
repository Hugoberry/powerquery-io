---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Zamenja vse navedene vrstice s podanimi vrsticami.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Zamenja vse navedene vrstice v tabeli `table` s podanimi vrsticami. Vrstice, ki bodo zamenjane, in nadomestne vrstice so navedene v `replacements` z obliko \{old, new\}. Določite lahko izbirni parameter `equationCriteria` za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1
Zamenjajte vrstici \[a = 1, b = 2\] in \[a = 2, b = 3\] z vrstico \[a = -1, b = -2\],\[a = -2, b = -3\] v tabeli.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
