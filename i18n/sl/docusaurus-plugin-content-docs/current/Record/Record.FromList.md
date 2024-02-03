---
title: Record.FromList
---

# Record.FromList


## Description

Vrne zapis, če navedete seznam vrednosti polj in nabor polj.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Vrne zapis, če navedete seznam <code>list</code> vrednosti polj in nabor polj.  <code>fields</code> je lahko določen s seznamom besedilnih vrednosti ali z vrsto zapisa.  Če polja niso enolična, pride do napake.


## Examples

### Example #1 
Ustvarite zapis iz seznama vrednosti polj in seznama imen polj.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Ustvarite zapis iz seznama vrednosti polj in vrste zapisa.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
