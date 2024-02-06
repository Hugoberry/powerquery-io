---
title: Table.SelectRows
---

# Table.SelectRows


उन पंक्तियों को चुनता है जो शर्त फ़ंक्शन को पूरा करती हैं.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Remarks

<code>table</code> से उन पंक्तियों की तालिका को लौटाता है, जो चयन <code>condition</code> से मेल खाती हैं.


## Examples

### Example #1 
तालिका की पंक्तियाँ चुनें जहाँ [CustomerID] स्तंभ के मान 2 से अधिक हों.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
तालिका की उन पंक्तियों को चुनें जहाँ नामों में &#34;B&#34; शामिल न हो.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
