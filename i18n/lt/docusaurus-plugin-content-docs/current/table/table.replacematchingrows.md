---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Pakeičiamos visos nurodytos eilutės pateikta (-omis) eilute (-ėmis).


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Visos nurodytos `table` eilutės pakeičiamos pateiktomis eilutėmis. Pakeistinos eilutės ir pakeitimai nurodyti `replacements`, naudojant formatavimą \{old, new\}. Galima nurodyti pasirenkamą parametrą `equationCriteria`, norint valdyti lentelės eilučių palyginimą.


## Examples

### Example #1
Pakeiskite eilutes \[a = 1, b = 2\] ir \[a = 2, b = 3\] į \[a = -1, b = -2\], \[a = -2, b = -3\] lentelėje.
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
