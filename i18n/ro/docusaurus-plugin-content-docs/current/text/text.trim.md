---
title: Text.Trim
---

# Text.Trim


Elimină toate caracterele de început și de sfârșit specificate.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnează rezultatul eliminării tuturor caracterelor de început și de sfârșit din `text` specificate. În mod implicit, toate caracterele spațiilor albe de sfârșit sunt eliminate.

-   `text`: textul din care vor fi eliminate caracterele de început și de sfârșit.
-   `trim`: Înlocuiește caracterele spațiilor albe care sunt trunchiate în mod implicit. Acest parametru poate fi un caracter unic sau o listă de caractere unice. Fiecare operațiune de trunchiere la început și la sfârșit se oprește atunci când se întâlnește un caracter care nu este trunchiat.


## Examples

### Example #1
Eliminaţi spaţiile goale de la început şi de la sfârşit din „ a b c d ”.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Eliminați zerourile de la început și de la sfârșit din reprezentarea textului unui număr.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Eliminați parantezele de început și de sfârșit dintr-o etichetă HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Eliminați caracterele speciale utilizate în jurul stării de vânzări în așteptare.
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
