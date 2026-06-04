---
title: Text.Combine
---

# Text.Combine


Zreťazí zoznam textových hodnôt na jednu textovú hodnotu.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Vráti výsledok kombinujúci zoznam textových hodnôt `texts` do jednej textovej hodnoty. Všetky hodnoty `null`, ktoré obsahuje `texts`, sa ignorujú. Možno zadať voliteľnú hodnotu `separator` použitú v konečnom kombinovanom texte.


## Examples

### Example #1
Kombinujte textové hodnoty "Seattle" a "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Kombinujte textové hodnoty Seattle a WA oddelené čiarkou a medzerou.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Skombinujte hodnoty Seattle, `null` a WA oddelené čiarkou a medzerou. (Upozorňujeme, že hodnota `null` sa ignoruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Skombinujte krstné meno, iniciálu (ak je k dispozícii) a priezvisko do celého mena danej osoby.
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
