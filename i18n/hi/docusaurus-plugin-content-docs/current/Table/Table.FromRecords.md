---
title: Table.FromRecords
---

# Table.FromRecords


## Description

रिकॉर्ड की सूची को एक तालिका में रूपांतरित करता है.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>records</code>, रिकॉर्ड की सूची, को एक तालिका में रूपांतरित करता है.


## Examples

### Example #1 
स्तंभ नामों के रूप में रिकॉर्ड फ़ील्ड नामों का उपयोग करके, रिकॉर्ड से तालिका बनाएँ.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
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
लिखे गए स्तंभों के साथ रिकॉर्ड से तालिका बनाएँ और संख्या स्तंभ चुनें.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
