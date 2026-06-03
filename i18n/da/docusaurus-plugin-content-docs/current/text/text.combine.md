---
title: Text.Combine
---

# Text.Combine


Sammenkæder en liste over tekstværdier til en enkelt tekstværdi.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Returnerer resultatet af at kombinere listen over tekstværdier `texts`til en enkelt tekstværdi. Alle værdier af typen `null`, der findes i `texts`, ignoreres. Der kan angives en valgfri `separator` , der bruges i den endelige kombinerede tekst.


## Examples

### Example #1
Kombiner tekstværdierne "Seattle" og "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Kombiner tekstværdierne "Seattle" og "WA", adskilt af et komma og et mellemrum.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kombiner værdierne "Seattle", `null` og "WA", adskilt af et komma og et mellemrum. Bemærk, at `null` ignoreres.
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Kombiner fornavnet, det midterste initial (hvis det findes) og efternavnet i personens fulde navn.
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
