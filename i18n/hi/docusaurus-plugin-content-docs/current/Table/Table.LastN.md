---
title: Table.LastN
---

# Table.LastN


## Description

निर्दिष्ट संख्या के बराबर अंतिम पंक्तियाँ लौटाता है.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

<code>table</code> के मान के आधार पर, तालिका, <code>table</code>, की अंतिम पंक्तियाँ लौटाता है:    <ul>    <li> यदि <code>countOrCondition</code> एक संख्या है, तो उतनी ही पंक्तियाँ स्थिति (समाप्ति - <code>countOrCondition</code>) के आरंभ से लौटाई जाएँगी. </li>    <li> यदि <code>countOrCondition</code> एक शर्त है, तो किसी पंक्ति के शर्त पूरा न करने तक, शर्त को पूरा करने वाली पंक्तियों को आरोही स्थिति में लौटाया जाएगा.</li></ul>


## Examples

### Example #1 
तालिका की अंतिम दो पंक्तियाँ ढूँढें.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
उन अंतिम पंक्तियों को ढूँढें जहाँ तालिका में [a] &gt; 0 है.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
