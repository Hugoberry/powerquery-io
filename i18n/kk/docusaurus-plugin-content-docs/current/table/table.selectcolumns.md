---
title: Table.SelectColumns
---

# Table.SelectColumns


Тек көрсетілген бағандар бар кестені қайтарады.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Тек көрсетілген `table` бар `columns` қайтарады.

-   `table`: көрсетілген кесте.
-   `columns`: `table` кестесінен қайтарылатын бағандар тізімі. Қайтарылған кестедегі бағандар `columns` ішінде тізілген ретпен орналасады.
-   `missingField`: *(Міндетті емес)* Баған болмаса, не істеу керек. Мысал: `MissingField.UseNull` немесе `MissingField.Ignore`.


## Examples

### Example #1
Тек \[Name\] бағанын қосыңыз.
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Тек \[CustomerID\] және \[Name\] бағандарын қосыңыз.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Егер қосылған баған жоқ болса, әдепкі нәтиже қате болып табылады.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Егер қосылған баған жоқ болса, `MissingField.UseNull` опциясы null мәндерден тұратын баған жасайды.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
