---
title: Text.Combine
---

# Text.Combine


Concatena un elenco di valori di testo in un unico valore di testo.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Restituisce il risultato della combinazione dell'elenco di valori di testo, `texts`, in un singolo valore di testo. Tutti i valori `null` presenti in `texts` vengono ignorati. È possibile specificare un `separator` facoltativo utilizzato nel testo combinato finale.


## Examples

### Example #1
Combinare i valori di testo "Seattle" e "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Combinare i valori di testo "Seattle" e "WA" separati da una virgola e uno spazio.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Combinare i valori "Seattle", `null` e "WA", separati da una virgola e uno spazio. Si noti che `null` viene ignorato.
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Combinare il nome, l'iniziale centrale (se presente) e il cognome nel nome completo della persona.
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
