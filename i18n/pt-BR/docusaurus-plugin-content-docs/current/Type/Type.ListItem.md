---
title: Type.ListItem
---

# Type.ListItem


## Description

Retorna um tipo de item de um tipo de lista.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Retorna um tipo de item de uma lista <code>type</code>.


## Examples

### Example #1 
Encontre o tipo de item a partir da lista &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
