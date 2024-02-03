---
title: Type.NonNullable
---

# Type.NonNullable


## Description

Επιστρέφει τον τύπο χωρίς δυνατότητα null από έναν τύπο.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

Επιστρέφει τον τύπο χωρίς δυνατότητα <code>nullable</code> από το στοιχείο <code>type</code>.


## Examples

### Example #1 
Επιστροφή του τύπου χωρίς δυνατότητα null του στοιχείου &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
