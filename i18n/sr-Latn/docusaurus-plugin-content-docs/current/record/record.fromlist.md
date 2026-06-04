---
title: Record.FromList
---

# Record.FromList


Vraća zapis na osnovu liste vrednosti polja i skupa polja.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Vraća zapis na osnovu `list` vrednosti polja i skupa polja. `fields` može da navede lista tekstualnih vrednosti ili tip zapisa. Ako polja nisu jedinstvena, prijavljuje se greška.


## Examples

### Example #1
Formiranje zapisa od liste vrednosti polja i liste imena polja.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Formiranje zapisa od liste vrednosti polja i tipa zapisa.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
