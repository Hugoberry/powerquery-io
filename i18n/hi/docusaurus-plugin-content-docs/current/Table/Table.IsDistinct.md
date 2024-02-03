---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

इंगित देता है कि तालिका में केवल विशिष्ट पंक्तियाँ (कोई डुप्लिकेट नहीं) हैं या नहीं.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

इंगित करता है कि <code>table</code> में केवल विशिष्ट पंक्तियाँ (कोई डुप्लिकेट नहीं) हैं या नहीं. पंक्तियों के विशिष्ट होने पर <code>सत्य</code> अन्यथा <code>असत्य</code> लौटाता है.    एक वैकल्पिक पैरामीटर, <code>comparisonCriteria</code>, निर्दिष्ट करता है कि डुप्लिकेशन के लिए तालिका के किन स्तंभों का परीक्षण किया जाए. यदि <code>comparisonCriteria</code> को निर्दिष्ट नहीं किया जाता है, तो सभी स्तंभों का परीक्षण किया जाता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका विशिष्ट है.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या तालिका स्तंभ में विशिष्ट है.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
