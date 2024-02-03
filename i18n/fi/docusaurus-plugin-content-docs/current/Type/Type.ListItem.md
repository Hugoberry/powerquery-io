---
title: Type.ListItem
---

# Type.ListItem


## Description

Palauttaa kohdetyypin luettelotyypistä.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Palauttaa kohdetyypin luettelosta <code>type</code>.


## Examples

### Example #1 
Etsi kohdetyyppi luettelosta &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
