---
title: Table.First
---

# Table.First


Vrátí první řádek nebo zadanou výchozí hodnotu.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Vrátí první řádek tabulky `table` nebo volitelnou výchozí hodnotu `default`, pokud je tabulka prázdná.


## Examples

### Example #1
Najde první řádek tabulky.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Najde první řádek tabulky `({})` nebo vrátí řádek \[a = 0, b = 0\], pokud je tabulka prázdná.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
