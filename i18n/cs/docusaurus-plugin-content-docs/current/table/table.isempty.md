---
title: Table.IsEmpty
---

# Table.IsEmpty


Určuje, jestli tabulka obsahuje řádky.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Určuje, jestli tabulka `table` obsahuje řádky. Vrátí hodnotu `true`, pokud nejsou zjištěné žádné řádky (pokud je například tabulka prázdná), jinak vrátí hodnotu `false`.


## Examples

### Example #1
Určí, jestli je tabulka prázdná.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Určí, zda je tabulka `({})` prázdná.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
