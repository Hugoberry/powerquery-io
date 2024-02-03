---
title: Record.FromList
---

# Record.FromList


## Description

Tiek atgriezts ieraksts atbilstoši norādītajam lauku vērtību sarakstam un lauku kopai.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Tiek atgriezts ieraksts atbilstoši norādītajam lauku vērtību sarakstam <code>list</code> un lauku kopai.  Lai norādītu <code>fields</code>, varat izmantot teksta vērtību sarakstu vai ieraksta tipu.  Ja lauki nav unikāli, tiek atgriezta kļūda.


## Examples

### Example #1 
Izveidojiet ierakstu, izmantojot lauku vērtību sarakstu un lauku nosaukumu sarakstu.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Izveidojiet ierakstu, izmantojot lauku vērtību sarakstu un ieraksta tipu.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
