---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


छोड़ी गई प्रथम गणना पंक्तियों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

ऐसी तालिका लौटाता है, जिसमें तालिका <code>table</code> की पंक्तियों <code>countOrCondition</code> की प्रथम निर्दिष्ट संख्या नहीं होती है.    निकाली गई पंक्तियों की संख्या वैकल्पिक पैरामीटर <code>countOrCondition</code> पर निर्भर होती है.    <ul>    <li> यदि <code>countOrCondition</code> को छोड़ा जाता है, तो केवल प्रथम पंक्ति निकाली जाती है. </li>    <li> यदि <code>countOrCondition</code> कोई संख्या हो, तो उतनी पंक्तियाँ (शीर्ष से प्रारंभ करते हुए) निकाल दी जाएँगी. </li>    <li> यदि <code>countOrCondition</code> कोई शर्त हो, तो किसी एक पंक्ति के शर्त पूरा न करने तक, शर्त को पूरा करने वाली पंक्तियों को निकाल दिया जाएगा.</li>    </ul>


## Examples

### Example #1 
तालिका की पहली पंक्ति निकालें.
```powerquery
Table.RemoveFirstN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2 
तालिका की पहली दो पंक्तियाँ निकालें.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3 
पहली दो पंक्तियाँ निकालें, जहाँ तालिका का [CustomerID] &lt;=2 होता है.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
