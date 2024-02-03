---
title: Type.ListItem
---

# Type.ListItem


## Description

Elemtípus visszaadása egy listatípusból.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

A(z) paraméterben megadott <code>type</code> lista elemtípusának visszaadása.


## Examples

### Example #1 
Elemtípus megkeresése a &lt;code&gt;\{number}&lt;/code&gt; listában.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
