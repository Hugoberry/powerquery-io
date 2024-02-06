---
title: Record.TransformFields
---

# Record.TransformFields


Returns a record after applying specified transformations.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returns a record after applying transformations specified in list <code>transformOperations</code> to <code>record</code>.    One or more fields may be transformed at a given time.      <div>In the case of a single field being transformed, <code>transformOperations</code> is expected to be a list with two items. The first item in <code>transformOperations</code> specifies a field name, and the second item in <code>transformOperations</code> specifies the function to be used for transformation. For example, <code>\{"Quantity", Number.FromText}</code></div>      <div>In the case of a multiple fields being transformed, <code>transformOperations</code> is expected to be a list of lists, where each inner list is a pair of field name and transformation operation. For example, <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Convert &#34;Price&#34; field to number.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
Convert &#34;OrderID&#34; and &#34;Price&#34; fields to numbers.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
