---
title: Text.Combine
---

# Text.Combine


Egy szöveges értékké fűzi össze a szöveges értékek listáját.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

A szöveges értékek listájának (`texts`) egyetlen szöveges értékbe való kombinálásának eredményét adja vissza. A `texts` elemben található `null` értékek figyelmen kívül lesznek hagyva. Megadható a végső kombinált szövegben használt opcionális `separator`.


## Examples

### Example #1
Összevonja a „Seattle” és a „WA” szöveges értéket.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Összevonja a „Seattle” és a „WA” szöveges értéket úgy, hogy egy vesszőt és egy szóközt („, ”) használ elválasztóként.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Kombinálja a „Seattle“, a `null` és a „WA“ értékeket vesszővel és szóközzel elválasztva. (Vegye figyelembe, hogy a(z) `null` figyelmen kívül van hagyva.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Az utónevet, a középső kezdőbetűt (ha van) és a vezetéknevet az egyén teljes nevévé kombinálhatja.
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
