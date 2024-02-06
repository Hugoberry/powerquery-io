---
title: Table.ContainsAll
---

# Table.ContainsAll


संकेत देता है कि सभी निर्दिष्ट रिकॉर्ड तालिका में पंक्तियों के रूप में दिखाई देते हैं या नहीं.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

संकेत देता है कि रिकॉर्ड की सूची <code>rows</code> में सभी निर्दिष्ट रिकॉर्ड, <code>table</code> में पंक्तियों के रूप में दिखाई देते हैं या नहीं.    तालिका की पंक्तियों की तुलना को नियंत्रित करने के लिए कोई वैकल्पिक पैरामीटर <code>equationCriteria</code> निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
केवल स्तंभ [CustomerID] से तुलना करते हुए निर्धारित करें कि क्या तालिका में सभी पंक्तियाँ हैं.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या तालिका में सभी पंक्तियाँ हैं.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
