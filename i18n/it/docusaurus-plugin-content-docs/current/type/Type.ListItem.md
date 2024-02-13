---
title: Type.ListItem
---

# Type.ListItem


Restituisce un tipo di elemento da un tipo elenco.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

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
