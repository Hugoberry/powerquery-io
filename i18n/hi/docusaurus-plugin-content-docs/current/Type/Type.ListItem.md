---
title: Type.ListItem
---

# Type.ListItem


## Description

सूची प्रकार से आइटम प्रकार लौटाता है.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

सूची <code>type</code> से आइटम प्रकार लौटाता है.


## Examples

### Example #1 
सूची &lt;code&gt;\{number}&lt;/code&gt; से आइटम प्रकार ढूँढें.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
