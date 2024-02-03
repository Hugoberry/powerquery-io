---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Returns a closed version of the given record type (or the same type, if it is already closed).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Returns a closed version of the given <code>record</code> <code>type</code> (or the same type, if it is already closed).


## Examples

### Example #1 
Create a closed version of &lt;code&gt;type [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
