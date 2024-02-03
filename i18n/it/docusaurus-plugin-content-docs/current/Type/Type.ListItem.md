---
title: Type.ListItem
---

# Type.ListItem


## Description

Restituisce un tipo di elemento da un tipo elenco.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Details

Restituisce un tipo di elemento da un <code>type</code> elenco.


## Examples

### Example #1 
Trovare il tipo di elemento dall&#39;elenco &lt;code&gt;\{number}&lt;/code&gt;.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
