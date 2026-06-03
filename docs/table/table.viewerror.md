---
title: Table.ViewError
---

# Table.ViewError


Creates a modified error record which won't trigger a fallback when raised by a handler defined on a view (via Table.View).


## Syntax

```powerquery
Table.ViewError(
    errorRecord as record
) as record
```


## Remarks

Creates a modified error record from `errorRecord` which won't trigger a fallback when raised by a handler defined on a view (via Table.View).



## Category
Table.Table construction
