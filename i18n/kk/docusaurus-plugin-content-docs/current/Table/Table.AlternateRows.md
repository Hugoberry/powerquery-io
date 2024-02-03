---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Бастапқы ауытқуды сақтайды, содан кейін келесі жолдарды кезекпен қабылдайды және өткізіп жібереді.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Бастапқы ауытқуды сақтайды, содан кейін келесі жолдарды кезекпен қабылдайды және өткізіп жібереді.    <ul>       <li><code>table</code>: кіріс кесте.</li>       <li><code>offset</code>: итерацияларды бастау алдында сақтау керек жолдар саны.</li>       <li><code>skip</code>: әр итерацияда жою керек жолдар саны.</li>       <li><code>take</code>: әр итерацияда сақтау керек жолдар саны.</li>    </ul>    


## Examples

### Example #1 
Бірінші жолдан бастап, 1 мәнді өткізіп жіберетін, сонан соң 1 мәнді сақтайтын кестеден кестені қайтару.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
