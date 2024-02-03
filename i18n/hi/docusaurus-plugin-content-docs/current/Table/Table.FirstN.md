---
title: Table.FirstN
---

# Table.FirstN


## Description

निर्दिष्ट प्रथम गणना पंक्तियाँ लौटाता है.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

<code>table</code> के मान के आधार पर, तालिका <code>table</code> की पहली पंक्तियाँ लौटाता है:    <ul>    <li> यदि <code>countOrCondition</code> एक संख्या है, तो उतनी ही पंक्तियाँ (शीर्ष से प्रारंभ करके) लौटाई जाएँगी. </li>    <li> यदि <code>countOrCondition</code> एक शर्त है, तो किसी पंक्ति के शर्त पूरा न करने तक, शर्त को पूरा करने वाली पंक्तियों को लौटाया जाएगा.</li></ul>


## Examples

### Example #1 
तालिका की पहली दो पंक्तियाँ ढूँढें.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
उन पहली पंक्तियों को ढूँढें जहाँ तालिका में [a] &gt; 0 है.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
