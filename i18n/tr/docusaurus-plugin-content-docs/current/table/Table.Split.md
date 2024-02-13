---
title: Table.Split
---

# Table.Split


Belirtilen sayfa boyutunu kullanarak belirtilen tabloyu bir tablolar listesine ayırır.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

<code>table</code> öğesini; listenin ilk öğesinin kaynak tablodaki ilk <code>pageSize</code> satırı barındıran bir tablo olduğu, sonraki öğenin ise    kaynak listeden sonraki <code>pageSize</code> satırı barındıran bir tablo olduğu ve bu şekilde devam eden bir tablolar listesine ayırır.


## Examples

### Example #1 
Beş kayıtlık bir tabloyu, iki kayıtlık tablolara ayırır.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
