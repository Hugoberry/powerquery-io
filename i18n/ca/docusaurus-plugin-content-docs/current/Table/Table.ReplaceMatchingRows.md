---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Suprimeix totes les files especificades amb les files proporcionades.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Suprimeix totes les files especificades a la taula <code>table</code> amb les proporcionades. Les files que s'han de substituir i les substitucions s'especifiquen a <code>replacements</code>, amb format \{old, new}.    Es pot especificar un paràmetre opcional, <code>equationCriteria</code>, per controlar la comparació entre les files de la taula.


## Examples

### Example #1 
Substitueix les files [a = 1, b = 2] i [a = 2, b = 3] per [a = -1, b = -2],[a = -2, b = -3] a la taula.
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
