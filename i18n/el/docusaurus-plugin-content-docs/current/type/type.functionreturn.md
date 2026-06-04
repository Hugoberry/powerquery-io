---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Επιστρέφει έναν τύπο ο οποίος επιστρέφεται από έναν τύπο συνάρτησης.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Επιστρέφει έναν τύπο ο οποίος επιστρέφεται από μια συνάρτηση `type`.


## Examples

### Example #1
Εύρεση του τύπου επιστροφής του στοιχείου `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
