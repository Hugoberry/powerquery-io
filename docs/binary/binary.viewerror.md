---
title: Binary.ViewError
---

# Binary.ViewError


Creates a modified error record which won't trigger a fallback when raised by a handler defined on a view (via Binary.View).


## Syntax

```powerquery
Binary.ViewError(
    errorRecord as record
) as record
```


## Remarks

Creates a modified error record from `errorRecord` which won't trigger a fallback when raised by a handler defined on a view (via Binary.View).



## Category
Binary
