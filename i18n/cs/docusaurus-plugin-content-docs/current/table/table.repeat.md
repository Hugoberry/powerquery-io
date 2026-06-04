---
title: Table.Repeat
---

# Table.Repeat


Opakuje řádky tabulek zadaných na základě zadaného počtu opakování.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Vrátí tabulku s řádky ze vstupu `table` s následujícím zadaným počtem opakování: `count`.


## Examples

### Example #1
Dvakrát opakuje řádky v tabulce.
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
