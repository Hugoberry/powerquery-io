---
title: Table.ContainsAny
---

# Table.ContainsAny


Značí, zda se mají zadané záznamy zobrazovat jako řádky tabulky.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Značí, zda se mají zadané záznamy v seznamu záznamů `rows` zobrazovat jako řádky tabulky `table`. Za účelem řízení porovnání mezi řádky tabulky může být určen volitelný parametr `equationCriteria`.


## Examples

### Example #1
Určí, zda tabulka `({[a = 1, b = 2], [a = 3, b = 4]})` obsahuje řádky `[a = 1, b = 2]` nebo `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Určí, zda tabulka `({[a = 1, b = 2], [a = 3, b = 4]})` obsahuje řádky `[a = 1, b = 3]` nebo `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Určí, zda tabulka `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` obsahuje řádky `[a = 1, b = 3]` nebo `[a = 3, b = 5]` porovnáním pouze se sloupcem \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
