---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


तालिका में सूचियों का स्तंभ दिया जाता है, उसकी सूची में मौजूद प्रत्येक मान के लिए एक पंक्ति की प्रतिलिपि बनाएँ.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

<code>table</code> दिया जाता है, जहाँ <code>column</code> मानों की सूची है, सूची को प्रत्येक मान के लिए एक पंक्ति में विभाजित करता है. बनाई गई प्रत्येक नई पंक्ति में अन्य स्तंभों के मानों के डुप्लिकेट बना दिए जाते हैं.


## Examples

### Example #1 
सूची स्तंभ [Name] को तालिका में विभाजित करें.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
