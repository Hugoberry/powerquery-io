---
title: Table.Last
---

# Table.Last


Tiek atgriezta pēdējā rinda vai norādītā noklusējuma vērtība.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

Tiek atgriezta `table` pēdējā rinda vai neobligāta noklusējuma vērtība `default`, ja tabula ir tukša.


## Examples

### Example #1
Atrodiet tabulas pēdējo rindu.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2
Atrodiet tabulas `({})` pēdējo rindu vai tiek atgriezts \[a = 0, b = 0\], ja tā ir tukša.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
