---
title: Text.Combine
---

# Text.Combine


Łączy listę wartości tekstowych w jedną wartość tekstową.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Zwraca wynik połączenia listy wartości tekstowych`texts` w pojedynczą wartość tekstową. Wszystkie wartości `null` obecne w `texts` są ignorowane. Można określić opcjonalny `separator` element używany w końcowym połączonym tekście.


## Examples

### Example #1
Połącz wartości tekstowe „Seattle” i „WA”.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Połącz wartości tekstowe „Seattle” i „WA”, rozdzielając je przecinkiem i spacją.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Połącz wartości „Seattle”, `null` i „WA”, rozdzielając je przecinkami i spacją. (Zwróć uwagę, że `null` jest ignorowany).
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Połącz imię, inicjał środkowy (jeśli istnieje) i nazwisko w imię i nazwisko osoby.
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
