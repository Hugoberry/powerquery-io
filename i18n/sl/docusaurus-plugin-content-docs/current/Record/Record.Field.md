---
title: Record.Field
---

# Record.Field


## Description

Vrne vrednost navedenega polja v zapisu.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Vrne vrednost navedenega polja <code>field</code> v zapisu <code>record</code>. Če polja ni mogoče najti, pride do izjeme.


## Examples

### Example #1 
Poiščite vrednost polja &#34;IDStranke&#34; v zapisu.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
