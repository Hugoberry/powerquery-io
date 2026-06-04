---
title: Type.ListItem
---

# Type.ListItem


Επιστρέφει έναν τύπο στοιχείου από έναν τύπο λίστας.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Επιστρέφει έναν τύπο στοιχείου από μια λίστα `type`.


## Examples

### Example #1
Εύρεση τύπου στοιχείου από τη λίστα `{number}`.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
