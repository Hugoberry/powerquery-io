---
title: Record.SelectFields
---

# Record.SelectFields


Returns a record that contains only the specified fields.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returns a record which includes only the fields specified in list <code>fields</code> from the input <code>record</code>.


## Examples

### Example #1 
Select the fields &#34;Item&#34; and &#34;Price&#34; in the record.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
