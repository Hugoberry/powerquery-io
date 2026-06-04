---
title: Text.TrimEnd
---

# Text.TrimEnd


Noņem visas norādītās noslēdzošās rakstzīmes.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, noņemot visas norādītās rakstzīmes `text`. Pēc noklusējuma tiek noņemtas visas noslēdzošās baltstarpas rakstzīmes.

-   `text`: teksts, no kura ir jānoņem noslēdzošās rakstzīmes.
-   `trim`: ignorē baltstarpas rakstzīmes, kas pēc noklusējuma ir apgrieztas. Šis parametrs var būt viena rakstzīme vai vienu rakstzīmju saraksts. Katra beigu apgriešanas darbība tiek apturēta, kad tiek atrasta rakstzīme, kas nav apgriezta.


## Examples

### Example #1
Noņemiet beigu baltstarpu no " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Noņemiet nulles pēc teksta, kas tiek atveidots kā peldošā komata skaitlis ar tastatūru.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Noņemiet fiksēta platuma konta nosaukuma noslēdzošās papildinājuma rakstzīmes.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
