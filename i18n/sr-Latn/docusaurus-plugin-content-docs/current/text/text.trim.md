---
title: Text.Trim
---

# Text.Trim


Uklanja sve navedene početne i završne znakove.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vraća rezultat uklanjanja svih početnih i završnih znakova iz navedenog `text`. Svi početni i završni razmaci se podrazumevano uklanjaju.

-   `text`: tekst iz kog će biti uklonjeni početni i završni znakovi.
-   `trim`: zamenjuje znakove razmaka koji su podrazumevano skraćeni. Ovaj parametar može da bude jedan znak ili lista pojedinačnih znakova. Svaka operacija skraćivanja početnih i završnih znakova se zaustavlja kada se naiđe na znak koji nije skraćen.


## Examples

### Example #1
Uklanja sve razmake s početka i kraja vrednosti „ a b c d “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Uklonite početne i završne nule iz tekstualnog prikaza broja.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Uklonite početne i završne zagrade iz HTML oznake.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Uklonite specijalne znakove koji se koriste oko statusa prodaje na čekanju.
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
