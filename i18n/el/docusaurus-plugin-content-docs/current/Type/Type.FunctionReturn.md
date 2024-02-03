---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

Επιστρέφει έναν τύπο ο οποίος επιστρέφεται από έναν τύπο συνάρτησης.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

Επιστρέφει έναν τύπο ο οποίος επιστρέφεται από μια συνάρτηση <code>type</code>.


## Examples

### Example #1 
Εύρεση του τύπου επιστροφής του στοιχείου &lt;code&gt;() as any)&lt;/code&gt;.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
