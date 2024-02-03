---
title: Type.ListItem
---

# Type.ListItem


## Description

Возвращает тип элемента на основании типа списка.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Возвращает тип элемента из списка. <code>type</code>.


## Examples

### Example #1 
Найти тип элемента в списке &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
