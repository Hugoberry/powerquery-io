---
title: Record.Combine
---

# Record.Combine


## Description

Fasst die Datensätze in der angegebenen Liste zusammen.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Fasst die Datensätze im angegebenen Element vom Typ "<code>records</code>" zusammen. Enthält das Element vom Typ "<code>records</code>" datensatzfremde Werte, wird ein Fehler zurückgegeben.


## Examples

### Example #1 
Erstellt einen zusammengefassten Datensatz auf der Grundlage der Datensätze.
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
