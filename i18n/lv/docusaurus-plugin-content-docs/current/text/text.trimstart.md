---
title: Text.TrimStart
---

# Text.TrimStart


Noņem visas norādītās sākuma rakstzīmes.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, noņemot visas norādītās sākuma rakstzīmes `text`. Pēc noklusējuma tiek noņemtas visas sākuma baltstarpas rakstzīmes.

-   `text`: teksts, no kura ir jānoņem sākuma rakstzīmes.
-   `trim`: ignorē baltstarpas rakstzīmes, kas pēc noklusējuma ir apgrieztas. Šis parametrs var būt viena rakstzīme vai vienu rakstzīmju saraksts. Katra sākuma apgriešanas darbība tiek apturēta, kad tiek atrasta rakstzīme, kas nav apgriezta.


## Examples

### Example #1
Noņemiet sākuma baltstarpu no " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Noņemiet nulles pirms skaitļa teksta attēlojuma.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Noņemiet fiksēta platuma konta nosaukuma sākuma papildinājuma rakstzīmes.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
