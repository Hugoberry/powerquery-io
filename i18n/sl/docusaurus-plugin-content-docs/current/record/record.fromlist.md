---
title: Record.FromList
---

# Record.FromList


Vrne zapis, če navedete seznam vrednosti polj in nabor polj.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Vrne zapis na podlagi seznama `list` vrednosti polj in nabora polj. `fields` je lahko določen s seznamom besedilnih vrednosti ali z vrsto zapisa. Če polja niso enolična, pride do napake.


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
