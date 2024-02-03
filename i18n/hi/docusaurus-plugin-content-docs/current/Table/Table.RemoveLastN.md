---
title: Table.RemoveLastN
---

# Table.RemoveLastN


## Description

अंतिम N पंक्तियों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Details

ऐसी तालिका लौटाता है, जिसमें तालिका <code>table</code> की अंतिम <code>countOrCondition</code> पंक्तियाँ नहीं होती हैं.        निकाली गई पंक्तियों की संख्या वैकल्पिक पैरामीटर <code>countOrCondition</code> पर निर्भर होती है.    <ul>    <li> यदि <code>countOrCondition</code> को छोड़ा जाता है, तो केवल अंतिम पंक्ति निकाली जाती है. </li>    <li> यदि <code>countOrCondition</code> कोई संख्या हो, तो उतनी पंक्तियाँ (नीचे से प्रारंभ करते हुए) निकाल दी जाएँगी. </li>    <li> यदि <code>countOrCondition</code> कोई शर्त हो, तो किसी पंक्ति के शर्त पूरा न करने तक, शर्त को पूरा करने वाली पंक्तियों को निकाल दिया जाएगा.</li>    </ul>


## Examples

### Example #1 
तालिका की अंतिम पंक्ति निकालें.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
अंतिम पंक्तियों को निकालें, जहाँ तालिका का [CustomerID] &gt; 2 होता है.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
