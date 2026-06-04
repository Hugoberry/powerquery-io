---
title: Text.Combine
---

# Text.Combine


Povezuje listu tekstualnih vrednosti u jednu tekstualnu vrednost.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Vraća rezultat kombinovanja liste tekstualnih vrednosti, `texts`, u jednu tekstualnu vrednost. Sve `nulte` vrednosti prisutne u `texts` se zanemaruju. Može da se navede opcionalna `separator` koja se koristi u konačnom kombinovanom tekstu.


## Examples

### Example #1
Kombinovanje tekstualnih vrednosti „Seattle“ i „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Kombinujte tekstualne vrednosti „Sijetl“ i "WA", razdvojene zarezom i razmakom.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kombinujte vrednosti „Sijetl“, `nultu vrednost` i „WA“, razdvojene zarezom i razmakom. (Imajte u vidu da se `nulta vrednost` zanemaruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Kombinujte ime, inicijal srednjeg imena (ako postoji) i prezime u puno ime osobe.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
