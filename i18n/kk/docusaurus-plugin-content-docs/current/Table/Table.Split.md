---
title: Table.Split
---

# Table.Split


## Description

Көрсетілген бет өлшемін пайдаланып, көрсетілген кестені кестелер тізіміне бөледі.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

<code>table</code> кестелер тізіміне бөледі, мұнда тізімнің бірінші элементі —     бастапқы кестенің алғашқы <code>pageSize</code> жолын қамтитын кесте, тізімнің келесі элементі — бастапқы кестенің келесі <code>pageSize</code> жолын қамтитын кесте және т.б.


## Examples

### Example #1 
Бес жазбадан тұратын кестені әрқайсысында екі жазба болатын кестелерге бөлу.
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
