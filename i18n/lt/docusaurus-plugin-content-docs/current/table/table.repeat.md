---
title: Table.Repeat
---

# Table.Repeat


Kartojamos lentelių eilutės nurodytą kartų skaičių.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Pateikiama lentelė su eilutėmis iš išvesties `table`, kartojama nurodytą kartų `count`.


## Examples

### Example #1
Kartokite eilutes lentelėje du kartus.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
