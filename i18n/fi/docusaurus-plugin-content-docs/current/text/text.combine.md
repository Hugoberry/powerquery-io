---
title: Text.Combine
---

# Text.Combine


Yhdistää tekstiarvoluettelon yhdeksi tekstiarvoksi.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Palauttaa tuloksen, joka saadaan yhdistämällä tekstiarvojen luettelo, `texts`, yhdeksi tekstiarvoksi. Kohteessa `texts` olevat `null`\-arvot ohitetaan. Valinnainen `separator`, jota käytetään lopullisessa yhdistetyssä tekstissä, voidaan määrittää.


## Examples

### Example #1
Yhdistä tekstiarvot "Seattle" ja "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Yhdistä tekstiarvot "Seattle" ja "WA" pilkulla ja välilyönnillä eroteltuna.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Yhdistä arvot "Seattle", `null` ja "WA" pilkulla ja välilyönnillä eroteltuina. (Huomaa, että `null` ohitetaan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Muodosta henkilön koko nimi yhdistämällä etunimi, toisen nimen ensimmäinen kirjain (jos sellainen on) ja sukunimi.
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
