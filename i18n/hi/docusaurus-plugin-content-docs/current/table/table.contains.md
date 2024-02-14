---
title: Table.Contains
---

# Table.Contains


संकेत देता है कि निर्दिष्ट रिकॉर्ड तालिका में एक पंक्ति के रूप में दिखाई देता है या नहीं.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Remarks

संकेत देता है कि निर्दिष्ट रिकॉर्ड, <code>row</code>, <code>table</code> में एक पंक्ति के रूप में दिखाई देता है या नहीं.    तालिका की पंक्तियों की तुलना को नियंत्रित करने के लिए कोई वैकल्पिक पैरामीटर <code>equationCriteria</code> निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका में पंक्ति है.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या तालिका में पंक्ति है.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
केवल स्तंभ [Name] से तुलना करते हुए निर्धारित करें कि क्या तालिका पंक्ति है.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
