---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Zamienia wszystkie określone wiersze na dostarczone wiersze.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Zamienia wszystkie określone wiersze w tabeli <code>table</code> na dostarczone wiersze. Wiersze przeznaczone do zamiany oraz wiersze zastępcze są określone w parametrze <code>replacements</code> przy użyciu formatowania \{old, new}.    Opcjonalny parametr <code>equationCriteria</code> można określić, aby sterować porównywaniem wierszy tabeli.


## Examples

### Example #1 
Zamień wiersze [a = 1, b = 2] i [a = 2, b = 3] na wiersze [a = -1, b = -2],[a = -2, b = -3] w tabeli.
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
