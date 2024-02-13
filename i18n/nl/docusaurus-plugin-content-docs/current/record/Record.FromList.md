---
title: Record.FromList
---

# Record.FromList


Retourneert een record op basis van een lijst veldwaarden en een set velden.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Retourneert een record op basis van een <code>list</code> veldwaarden en een set velden.  De <code>fields</code> kan worden opgegeven als een lijst met tekstwaarden of als een recordtype.  Er wordt een fout gegenereerd als de velden niet uniek zijn.


## Examples

### Example #1 
Een record samenstellen van een lijst veldwaarden en een lijst veldnamen.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Een record samenstellen van een lijst veldwaarden en een recordtype.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
