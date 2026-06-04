---
title: Text.Combine
---

# Text.Combine


Teksta vērtību saraksts tiek savienots vienā teksta vērtībā.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, apvienojot `texts` teksta vērtību sarakstu vienā teksta vērtībā. Visas `null` vērtības, kas ir `texts`, tiek ignorētas. Var norādīt neobligātu `separator`, kas tiek izmantots galīgajā kombinētajā tekstā.


## Examples

### Example #1
Apvienojiet teksta vērtības Seattle un WA.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Apvienojiet teksta vērtības Seattle un WA, kas atdalītas ar komatu un atstarpi.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Apvienojiet vērtības Seattle, `null` un WA, kas atdalītas ar komatu un atstarpi. (Ņemiet vērā, ka `null` ir ignorēta.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Personas pilnajā vārdā apvienojiet personas vārdu, vidējo vārdu (ja tāds ir) un uzvārdu.
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
