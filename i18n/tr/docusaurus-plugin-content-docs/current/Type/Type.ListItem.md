---
title: Type.ListItem
---

# Type.ListItem


## Description

Bir liste türünden öğe türü döndürür.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Bir <code>type</code> listesinden bir öğe türü döndürür.


## Examples

### Example #1 
Liste &lt;code&gt;\{number}&lt;/code&gt; içinden öğe türünü bulun.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
