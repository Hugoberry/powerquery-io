---
title: Table.SingleRow
---

# Table.SingleRow


## Description

तालिका में एकल पंक्ति लौटाता है.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

एक पंक्ति <code>table</code> में एकल पंक्ति लौटाता है. यदि <code>table</code> में एक से अधिक पंक्ति होती हैं, तो एक अपवाद दिखाया जाता है.


## Examples

### Example #1 
तालिका में एकल पंक्ति लौटाएँ.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
