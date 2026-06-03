---
title: Text.Combine
---

# Text.Combine


Verkettet eine Liste mit Textwerten zu einem einzelnen Textwert.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Gibt das Ergebnis der Kombination der Liste der Textwerte (`texts`) zu einem einzelnen Textwert zurück. Alle in `texts` vorhandenen `null-`\-Werte werden ignoriert. Eine optionale `separator`, die im abschließenden kombinierten Text verwendet wird, kann angegeben werden.


## Examples

### Example #1
Fasst die Textwerte "Seattle" und "WA"zusammen.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Fasst die Textwerte "Seattle" und "WA" zu einem durch ein Komma und ein Leerzeichen getrennten Wert zusammen.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kombinieren Sie die Werte "Seattle", `null` und "WA", getrennt durch ein Komma und ein Leerzeichen. (Beachten Sie, dass `null` ignoriert wird.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Kombinieren Sie den Vornamen, den Anfangsbuchstabe des zweiten Vornamens (sofern vorhanden) und den Nachnamen in den vollständigen Namen der Person.
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
