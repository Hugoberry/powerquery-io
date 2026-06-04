---
title: Text.Combine
---

# Text.Combine


Concatenează o listă de valori text într-o singură valoare text.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Returnează rezultatul combinării listei de valori text, `texts`, într-o singură valoare text. Toate valorile nule prezente în `texts` sunt ignorate. Se poate specifica un `separator` opțional utilizat în textul combinat final.


## Examples

### Example #1
Combinaţi valorile text „Seattle” şi „WA”.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combinaţi valorile text „Seattle” și „WA” separate printr-o virgulă și un spaţiu.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combinați valorile "Seattle", null și "WA", separate prin virgulă și spațiu. (Rețineți că `nul` este ignorat.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combinați prenumele, inițiala de la mijloc (dacă este prezentă) și numele de familie în numele complet al persoanei.
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
