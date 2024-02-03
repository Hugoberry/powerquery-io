---
title: Record.Field
---

# Record.Field


## Description

Returnerer værdien for det angivne felt i en post.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Returnerer værdien for det angivne felt <code>field</code> i posten <code>record</code>. Hvis feltet ikke blev fundet, udløses der en undtagelse.


## Examples

### Example #1 
Find værdien for feltet &#34;CustomerID&#34; i posten.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
