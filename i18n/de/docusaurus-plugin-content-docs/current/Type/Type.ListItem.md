---
title: Type.ListItem
---

# Type.ListItem


## Description

Gibt einen Elementtyp aus einem Listentyp zurück.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Gibt einen Elementtyp aus einer Liste <code>type</code> zurück.


## Examples

### Example #1 
Suchen Sie einen Elementtyp in der Liste &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
