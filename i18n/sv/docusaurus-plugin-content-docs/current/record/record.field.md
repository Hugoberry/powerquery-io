---
title: Record.Field
---

# Record.Field


Returnerar värdet för det angivna fältet i en post.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Returnerar värdet för angivet `field` i `record`. Om fältet inte hittas genereras ett undantag.


## Examples

### Example #1
Hitta värdet för fältet CustomerID i posten.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
