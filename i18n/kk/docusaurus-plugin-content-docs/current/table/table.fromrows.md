---
title: Table.FromRows
---

# Table.FromRows


Жол мәндерінің тізімінен және қосымша бағандардан кесте жасайды.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

`rows` тізімінен кесте жасайды, мұнда тізімнің әр элементі бір жол үшін баған мәндерін қамтитын ішкі тізім болып табылады. `columns` үшін баған атауларының қосымша тізімін, кесте түрін немесе бағандар санын көрсетуге болады.


## Examples

### Example #1
\[CustomerID\] бағанында \{1, 2\} мәндері бар, \[Name\] бағанында \{"Bob", "Jim"\} мәндері бар және \[Phone\] бағанында \{"123-4567", "987-6543"\} мәндері бар кестені қайтару.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
\[CustomerID\] бағанында \{1, 2\} мәндері бар, \[Name\] бағанында \{"Bob", "Jim"\} мәндері бар және \[Phone\] бағанында \{"123-4567", "987-6543"\} мәндері бар кестені қайтару, мұндағы \[CustomerID\] - сан түрі және \[Name\] және \[Phone\] - мәтін түрлері.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
