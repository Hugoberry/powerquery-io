---
title: Text.Combine
---

# Text.Combine


Voegt een lijst met tekstwaarden samen tot één tekstwaarde.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Retourneert het resultaat van het combineren van de lijst met tekstwaarden, `texts`, in één tekstwaarde. Alle `null` -waarden in `texts` worden genegeerd. Er kan een optionele `separator` worden opgegeven die in de uiteindelijke gecombineerde tekst wordt gebruikt.


## Examples

### Example #1
Tekstwaarden "Seattle" en "WA" combineren.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combineer de tekstwaarden 'Seattle' en 'WA', gescheiden door een komma en een spatie.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combineer de waarden 'Seattle', `null` en 'WA', gescheiden door een komma en een spatie. (De `null` wordt genegeerd.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combineer de voornaam, de middelste initiaal (indien aanwezig) en de achternaam tot de volledige naam van de persoon.
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
