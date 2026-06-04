---
title: Table.First
---

# Table.First


Vraća prvi red ili navedenu podrazumevanu vrednost.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Vraća prvi red iz `table` ili opcionalnu podrazumevanu vrednost, `default`, ako je tabela prazna.


## Examples

### Example #1
Pronalaženje prvog reda iz tabele.
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
Pronalaženje prvog reda iz tabele `({})` ili vraćanje \[a = 0, b = 0\] ako je tabela prazna.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
