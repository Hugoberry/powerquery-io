---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Тек көрсетілген бағандар бар кестені қайтарады.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Тек көрсетілген <code>columns</code> бар <code>table</code> қайтарады.    <ul>       <li><code>table</code>: көрсетілген кесте.</li>       <li><code>columns</code>: <code>table</code> кестесінен қайтарылатын бағандар тізімі. Қайтарылған кестедегі бағандар <code>columns</code> ішінде тізілген ретпен орналасады.</li>       <li><code>missingField</code>: <i>(міндетті емес)</i> Баған болмаса, не істеу керек.  Мысал: <code>MissingField.UseNull</code> немесе <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Тек [Name] бағанын қосыңыз.
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
Тек [CustomerID] және [Name] бағандарын қосыңыз.
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
Егер қосылған баған жоқ болса, &lt;code&gt;MissingField.UseNull&lt;/code&gt; опциясы null мәндерден тұратын баған жасайды.
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
