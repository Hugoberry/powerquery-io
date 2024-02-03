---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

तालिका लौटाता है जहाँ पर सभी स्तंभों को दिए गए पाठ के साथ उपसर्ग के रूप में शामिल किया गया है.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

एक तालिका लौटाता है जहाँ पर प्रदान किए गए <code>table</code> से सभी स्तंभ नामों को दिए गए पाठ, <code>prefix</code> के साथ उपसर्ग के रूप में शामिल किया गया है, साथ ही <code>prefix</code><code>.ColumnName</code> स्वरूप में पीरियड को शामिल किया गया है.


## Examples

### Example #1 
तालिका में &#34;MyTable&#34; में स्तंभों को पहले लगाएँ.
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
