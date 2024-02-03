---
title: Record.Combine
---

# Record.Combine


## Description

Verilen listedeki kayıtları birleştirir.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Verilen <code>records</code> içindeki kayıtları birleştirir. <code>records</code> kayıt olmayan değerler içeriyorsa hata döndürülür.


## Examples

### Example #1 
Kayıtlardan birleşik bir kayıt oluşturur.
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
