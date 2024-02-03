---
title: Table.HasColumns
---

# Table.HasColumns


## Description

संकेत देता है कि तालिका में निर्दिष्ट कॉलम है(हैं) या नहीं.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

संकेत देता है कि <code>table</code> में निर्दिष्ट कॉलम,<code>columns</code> है(हैं) या नहीं. यदि तालिका में कॉलम हैं, तो <code>true</code> आता है, या फिर <code>false</code> आता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका में [Name] स्तंभ है.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
ढूँढें कि क्या तालिका में [Name] और [PhoneNumber] स्तंभ हैं.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
