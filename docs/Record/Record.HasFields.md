---
title: Record.HasFields
---

# Record.HasFields


## Description

Indicates whether the record has the specified fields.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indicates whether the record <code>record</code> has the fields specified in <code>fields</code>, by returning a logical value (true or false).    Multiple field values can be specified using a list.


## Examples

### Example #1 
Check if the record has the field &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Check if the record has the field &#34;CustomerID&#34; and &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
