---
title: Type.ListItem
---

# Type.ListItem


## Description

Επιστρέφει έναν τύπο στοιχείου από έναν τύπο λίστας.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Επιστρέφει έναν τύπο στοιχείου από μια λίστα <code>type</code>.


## Examples

### Example #1 
Εύρεση τύπου στοιχείου από τη λίστα &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
