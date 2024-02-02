---
title: Record.Field
---

# Record.Field


## Description

Returns the value of the specified field in a record.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Returns the value of the specified <code>field</code> in the <code>record</code>. If the field is not found, an exception is thrown.


## Examples

### Example #1 
Find the value of field &#34;CustomerID&#34; in the record.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
