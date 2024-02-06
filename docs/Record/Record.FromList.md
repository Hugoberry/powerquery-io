---
title: Record.FromList
---

# Record.FromList


Returns a record given a list of field values and a set of fields.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Returns a record given a <code>list</code> of field values and a set of fields.  The <code>fields</code> can be specified either by a list of text values, or a record type.  An error is thrown if the fields are not unique.


## Examples

### Example #1 
Build a record from a list of field values and a list of field names.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Build a record from a list of field values and a record type.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
