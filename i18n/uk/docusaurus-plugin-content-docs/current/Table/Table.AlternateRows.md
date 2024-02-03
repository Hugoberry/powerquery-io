---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Зберігає початковий зсув, потім приймає і пропускає наступні рядки.


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

Зберігає початковий зсув, потім приймає і пропускає наступні рядки.    <ul>       <li><code>table</code>: Вхідна таблиця.</li>       <li><code>offset</code>: Кількість рядків, які необхідно зберегти до початку ітерацій.</li>       <li><code>skip</code>: Кількість рядків, які необхідно видалити в кожній ітерації.</li>       <li><code>take</code>: Кількість рядків, які необхідно зберегти в кожній ітерації.</li>    </ul>    


## Examples

### Example #1 
Повернути з таблиці таблицю, де, починаючи з першого рядка, 1 значення пропускається й 1 наступне значення зберігається.
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
