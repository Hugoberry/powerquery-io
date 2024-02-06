---
title: Table.IsEmpty
---

# Table.IsEmpty


Указывает, содержит ли таблица хотя бы одну строку.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Указывает, содержит ли "<code>table</code>" хотя бы одну строку. Возвращает значение <code>true</code>, если строк нет (т. е. таблица пуста), и <code>false</code> в противном случае.


## Examples

### Example #1 
Определение, пуста ли таблица.
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
Определить, пуста ли таблица &lt;code&gt;(\{})&lt;/code&gt;.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
