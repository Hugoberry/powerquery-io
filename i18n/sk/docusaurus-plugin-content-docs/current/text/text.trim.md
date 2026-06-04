---
title: Text.Trim
---

# Text.Trim


Odstráni všetky zadané začiatočné a koncové znaky.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vráti výsledok odstránenia všetkých začiatočných a koncových znakov zo zadanej hodnoty `text`. Predvolene sa odstránia všetky začiatočné a koncové prázdne znaky.

-   `text`: Text, z ktorého sa majú odstrániť začiatočné a koncové znaky.
-   `trim`: Prepíše prázdne znaky, ktoré sú predvolene orezané. Tento parameter môže obsahovať buď jeden znak, alebo zoznam jednotlivých znakov. Každá operácia orezania na začiatku a na konci sa zastaví, keď sa vyskytne neorezaný znak.


## Examples

### Example #1
Odstráňte úvodný aj koncový prázdny znak z textu " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Odstráňte začiatočné a koncové nuly z textového vyjadrenia čísla.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Odstráňte začiatočnú a koncovú zátvorku zo značky jazyka HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Odstráňte špeciálne znaky používané okolo stavu čakajúceho predaja.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
