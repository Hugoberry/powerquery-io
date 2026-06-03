---
title: Text.Combine
---

# Text.Combine


Sammanfogar en lista med textvärden till ett textvärde.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Returnerar resultatet av att kombinera listan med textvärden, `texts`, till ett enda textvärde. Alla `null` värden som finns i `texts` ignoreras. Du kan ange en valfri `separator` som används i den slutliga kombinerade texten.


## Examples

### Example #1
Kombinera textvärdena "Seattle" och "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Kombinera textvärdena "Seattle" och "WA" avgränsade med ett komma eller ett blanksteg.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kombinera värdena "Seattle", `null` och "WA", avgränsade med kommatecken och blanksteg. (Observera att `null` ignoreras.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Kombinera förnamnet, mellan initialen (om det finns) och efternamnet till personens fullständiga namn.
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
