---
title: Record.FromList
---

# Record.FromList


## Description

Pateikiamas įrašas su lauko reikšmių sąrašu ir laukų rinkiniu.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Pateikiamas įrašas su lauko reikšmių <code>list</code> ir laukų rinkiniu.  <code>fields</code> galima nurodyti naudojant tekstinių reikšmių sąrašą arba įrašo tipą.  Jei laukai neunikalūs, pateikiama klaida.


## Examples

### Example #1 
Sukurkite įrašą iš lauko reikšmių sąrašo ir lauko pavadinimų sąrašą.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Sukurkite įrašą iš lauko reikšmių sąrašo ir įrašo tipą.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
