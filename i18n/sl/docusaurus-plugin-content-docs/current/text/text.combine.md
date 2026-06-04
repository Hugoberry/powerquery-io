---
title: Text.Combine
---

# Text.Combine


Spoji seznam besedilnih vrednosti v eno besedilno vrednost.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Vrne rezultat združevanja seznama besedilnih vrednosti `texts` v eno besedilno vrednost. Vse vrednosti `null`, ki so prisotne v `texts`, so prezrte. Določite lahko nadomestni `separator`, ki bo uporabljen v končnem sestavljenem besedilu.


## Examples

### Example #1
Združite besedilni vrednosti"Seattle"in"WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Združite besedilni vrednosti"Seattle"in"WA", ločeni z vejico in presledkom.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Združite vrednosti"Seattle", `null` in"WA", med seboj ločene z vejico in presledkom. (Upoštevajte, da je vrednost `null` prezrta.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Združite ime, začetnico srednjega imena (če je prisotno) in priimek v polno ime posameznika.
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
