---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Returns the value of the specified field in a record or the default value if the field is not found.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Returns the value of the specified field <code>field</code> in the record <code>record</code>. If the field is not found, the optional <code>defaultValue</code> is returned.


## Examples

### Example #1 
Find the value of field &#34;Phone&#34; in the record, or return null if it doesn&#39;t exist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Find the value of field &#34;Phone&#34; in the record, or return the default if it doesn&#39;t exist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
