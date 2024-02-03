---
title: Type.ListItem
---

# Type.ListItem


## Description

Повертає тип елемента з типу списку.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Повертає тип елемента зі списку <code>type</code>.


## Examples

### Example #1 
Знайти тип елемента зі списку &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
