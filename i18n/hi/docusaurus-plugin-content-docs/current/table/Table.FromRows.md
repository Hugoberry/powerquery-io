---
title: Table.FromRows
---

# Table.FromRows


पंक्ति मानों की सूची से एक तालिका बनाता है. स्तंभ नामों की एक वैकल्पिक सूची या एक तालिका प्रकार को दूसरे तर्क के रूप में प्रदान किया जा सकता है.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

सूची <code>rows</code> से एक तालिका बनाता है जहाँ सूची का प्रत्येक तत्व एक आंतरिक सूची होता है जिसमें एकल पंक्ति के स्तंभ मान होते हैं. स्तंभ नामों की एक वैकल्पिक सूची या एक तालिका प्रकार को दूसरे तर्क के रूप में प्रदान किया जा सकता है <code>columns</code>.


## Examples

### Example #1 
मान \{1, 2} वाले स्तंभ [CustomerID] वाली तालिका लौटाएँ, मान \{&#34;Bob&#34;, &#34;Jim&#34;} वाला स्तंभ [Name] और मान \{&#34;123-4567&#34;, &#34;987-6543&#34;} वाला स्तंभ [Phone].
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
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
मान \{1, 2} वाले स्तंभ [CustomerID] की एक तालिका लौटाएँ, मान \{&#34;Bob&#34;, &#34;Jim&#34;} वाला स्तंभ [Name] और मान \{&#34;123-4567&#34;, &#34;987-6543&#34;} वाला स्तंभ [Phone], जहाँ [CustomerID] संख्या प्रकार हैं और [Name] और [Phone] पाठ प्रकार हैं.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
