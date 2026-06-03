---
title: Table.PrefixColumns
---

# Table.PrefixColumns


तालिका लौटाता है जहाँ पर सभी स्तंभों को दिए गए पाठ के साथ उपसर्ग के रूप में शामिल किया गया है.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

यह एक ऐसी तालिका लौटाता है, जिसमें दिए गए `table` के सभी कॉलम नामों के आगे, दिए गए टेक्स्ट `prefix` और एक बिंदु (period) को `prefix.ColumnName` के रूप में जोड़ा जाता है.


## Examples

### Example #1
तालिका में "MyTable" में स्तंभों को पहले लगाएँ.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
