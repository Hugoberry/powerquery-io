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

दिया गया `table` जहाँ `column` में मानों की सूची है, सूची को प्रत्येक मान के लिए एक पंक्ति में विभाजित करता है. बनाई गई प्रत्येक नई पंक्ति में अन्य स्तंभों के मान डुप्लिकेट किए गए हैं. यह फ़ंक्शन नेस्टेड तालिकाओं को रिकॉर्ड्स की सूची के रूप में मानकर उन्हें विस्तृत भी कर सकता है.


## Examples

### Example #1
सूची स्तंभ \[Name\] विभाजित करें.
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


### Example #2
नेस्टेड तालिका स्तंभ \[घटक\] विभाजित करें.
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
