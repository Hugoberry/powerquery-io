---
title: Record.FromList
---

# Record.FromList


Returnează o înregistrare dintr-o listă de valori pentru câmp şi de un set de câmpuri.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Returnează o înregistrare din `list` de valori pentru câmp și de un set de câmpuri. `fields` se poate specifica fie printr-o listă de valori text, fie printr-un tip de înregistrare. În cazul în care câmpurile nu sunt unice, se generează o eroare.


## Examples

### Example #1
Generaţi o înregistrare dintr-o listă de valori pentru câmp şi o listă de nume de câmpuri.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Generaţi o înregistrare dintr-o listă de valori pentru câmp şi un tip de înregistrare.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
