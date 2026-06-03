---
title: Table.SingleRow
---

# Table.SingleRow


तालिका में एकल पंक्ति लौटाता है.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

एक पंक्ति `table` में एकल पंक्ति लौटाता है. अगर `table` में एक से अधिक पंक्तियाँ हैं, तो एक त्रुटि आएगी.


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
