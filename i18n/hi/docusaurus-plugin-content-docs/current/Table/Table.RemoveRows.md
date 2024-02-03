---
title: Table.RemoveRows
---

# Table.RemoveRows


## Description

पंक्तियों की निर्दिष्ट संख्या निकालता है.


## Syntax

```powerquery
Table.RemoveRows(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Details

निर्दिष्ट <code>offset</code> पर प्रारंभ होने वाले <code>table</code> के प्रारंभ से पंक्तियों के <code>count</code> निकालता है. यदि <code>count</code> पैरामीटर प्रदान नहीं किया गया होता है, तो 1 की डिफ़ॉल्ट गणना का उपयोग किया जाता है. 


## Examples

### Example #1 
तालिका से पहली पंक्ति निकालें.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    0
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


### Example #2 
तालिका से स्थिति 1 पर स्थित पंक्ति निकालें.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
तालिका से स्थिति 1 पर प्रारंभ होने वाली दो पंक्तियाँ निकालें.
```powerquery
Table.RemoveRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
