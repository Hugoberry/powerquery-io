---
title: Type.RecordFields
---

# Type.RecordFields


Returns a record describing the fields of a record type with each field of the returned record type having a corresponding name and a value.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Returns a record describing the fields of a record `type`. Each field of the returned record type has a corresponding name and a value, in the form of a record `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Find the name and value of the record `[ A = number, optional B = any]`.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
