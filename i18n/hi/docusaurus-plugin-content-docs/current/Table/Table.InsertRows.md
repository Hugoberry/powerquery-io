---
title: Table.InsertRows
---

# Table.InsertRows


निर्दिष्ट स्थिति पर तालिका में पंक्तियों की एक सूची सम्मिलित करें.


## Syntax

```powerquery
Table.InsertRows(
    table as table,
    offset as number,
    rows as list
) as table
```


## Remarks

दी गई स्थिति, <code>offset</code> पर <code>table</code> में सम्मिलित पंक्तियों, <code>rows</code>, की सूची वाली एक तालिका लौटाता है. सम्मिलित करने के लिए पंक्ति के प्रत्येक स्तंभ को तालिका के स्तंभ प्रकारों से मेल खाना चाहिए.


## Examples

### Example #1 
स्थिति 1 पर तालिका में पंक्ति सम्मिलित करें.
```powerquery
Table.InsertRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    1,
    {[CustomerID = 3, Name = "Paul", Phone = "543-7890"]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
स्थिति 1 पर तालिका में दो पंक्तियाँ सम्मिलित करें.
```powerquery
Table.InsertRows(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    1,
    {
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
