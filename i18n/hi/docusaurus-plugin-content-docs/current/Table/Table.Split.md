---
title: Table.Split
---

# Table.Split


## Description

यह निर्दिष्ट तालिका को निर्दिष्ट पेज आकार का उपयोग करके तालिकाओं की सूची में विभाजित करता है.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

यह <code>table</code> को तालिकाओं की एक ऐसी सूची में विभाजित करता है, जहाँ सूची का पहला तत्व वह तालिका होती है जिसमें     स्रोत तालिका की प्रथम <code>pageSize</code> पंक्तियाँ शामिल हों, सूची का अगला तत्व वह तालिका होती है जिसमें स्रोत तालिका की अगली <code>pageSize</code> पंक्तियाँ शामिल होती हैं,इत्यादि.


## Examples

### Example #1 
पाँच रिकॉर्ड तालिकाओं को दो अलग-अलग रिकॉर्ड तालिकाओं में विभाजित करें.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
