---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Removes the specified field(s) from the input record.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Returns a record that removes all the fields specified in list <code>fields</code> from the input <code>record</code>. If the field specified does not exist, an exception is thrown.


## Examples

### Example #1 
Remove the field &#34;Price&#34; from the record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Remove the fields &#34;Price&#34; and &#34;Item&#34; from the record.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
