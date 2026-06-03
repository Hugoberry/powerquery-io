---
title: Record.AddField
---

# Record.AddField


किसी रिकॉर्ड में एक फ़ील्ड जोड़ता है.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

किसी रिकॉर्ड `record` में एक फ़ील्ड जोड़ता है, जिसमें फ़ील्ड `fieldName` का नाम और मान `value` दिया जाता है.


## Examples

### Example #1
फ़ील्ड पते को रिकॉर्ड में जोड़ें.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
