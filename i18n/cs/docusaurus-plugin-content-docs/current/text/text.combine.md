---
title: Text.Combine
---

# Text.Combine


Zřetězí seznam textových hodnot do jedné textové hodnoty.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Vrátí výsledek kombinování seznamu textových hodnot, `texts`, do jedné textové hodnoty. Všechny hodnoty `null` přítomné v `texts` se ignorují. Je možné zadat volitelnou položku `separator` použitou v konečném kombinovaném textu.


## Examples

### Example #1
Spojí textové hodnoty „Seattle“ a „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Spojí textové hodnoty „Seattle“ a „WA“ oddělené čárkou a mezerou.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Zkombinujte hodnoty Seattle, `null` a WA oddělené čárkou a mezerou. (Všimněte si, že `null` se ignoruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Zkombinujte jméno, prostřední iniciálu (pokud je k dispozici) a příjmení do celého jména jednotlivce.
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
