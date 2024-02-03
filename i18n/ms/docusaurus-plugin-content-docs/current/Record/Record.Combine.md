---
title: Record.Combine
---

# Record.Combine


## Description

Menggabungkan rekod dalam senarai yang ditentukan.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Menggabungkan rekod dalam senarai yang ditentukan <code>records</code>. Jika <code>records</code> mengandungi nilai bukan rekod, ralat dikembalikan.


## Examples

### Example #1 
Cipta rekod digabungkan daripada rekod.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
