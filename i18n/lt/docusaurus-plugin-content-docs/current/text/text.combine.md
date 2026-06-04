---
title: Text.Combine
---

# Text.Combine


Tekstinių reikšmių sąrašas sujungiamas į vieną tekstinę reikšmę.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Pateikiamas tekstinių reikšmių sąrašo, `texts`, sujungimo į vieną tekstinę reikšmę rezultatas. Visų `null` reikšmių, esančių `texts` , nepaisoma. Galima nurodyti pasirinktinį `separator`, naudojamą galutiniame bendrame tekste.


## Examples

### Example #1
Sujunkite tekstines reikšmes „Seattle“ ir „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Sujunkite tekstines reikšmes „Seattle“ ir „WA“ atskirdami kableliu ir tarpu.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Sujunkite reikšmes „Seattle“, `null` ir „WA“, atskirdami kableliais ir tarpu. (Atkreipkite dėmesį, kad `null` nepaisoma.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Sujunkite vardą, viduriniuosius inicialus (jei yra) ir pavardę į asmens vardą ir pavardę.
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
