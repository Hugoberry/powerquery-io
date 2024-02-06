---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Ersätter alla angivna rader med den eller de angivna raderna.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Ersätter alla specificerade rader i <code>table</code> med de som angivits. Raderna som ska ersättas och ersättningarna anges i <code>replacements</code> i formatet \{old, new}.    En valfri <code>equationCriteria</code>-parameter kan anges för att styra jämförelsen mellan raderna i tabellen.


## Examples

### Example #1 
Ersätt raderna [a = 1, b = 2] och [a = 2, b = 3] med [a = -1, b = -2],[a = -2, b = -3] i tabellen.
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
