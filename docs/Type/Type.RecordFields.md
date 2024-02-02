---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Returns a record describing the fields of a record type with each field of the returned record type having a corresponding name and a value.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Returns a record describing the fields of a record <code>type</code>. Each field of the returned record type has a corresponding name and a value, in the form of a record <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Find the name and value of the record &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
