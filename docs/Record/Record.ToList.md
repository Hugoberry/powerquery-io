---
title: Record.ToList
---

# Record.ToList


## Description

Returns a list of values containing the field values of the input record.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Returns a list of values containing the field values from the input <code>record</code>.


## Examples

### Example #1 
Extract the field values from a record.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
