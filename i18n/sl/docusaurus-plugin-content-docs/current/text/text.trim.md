---
title: Text.Trim
---

# Text.Trim


Odstrani vse navedene začetne in končne znake.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vrne rezultat odstranjevanja vseh vodilnih in končnih znakov iz navedenega niza `text`. Kot privzeto so odstranjeni vsi začetni in končni presledki.

-   `text`: Besedilo, iz katerega bodo odstranjeni začetni in končni znaki.
-   `trim`: Preglasi presledke, ki so privzeto obrezani. Ta parameter je lahko en sam znak ali seznam enojnih znakov. Vsak začetni in končni postopek obrezovanja se ustavi, ko je zaznan nerezan znak.


## Examples

### Example #1
Odstranite začetne in končne presledke iz" a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Odstranite vodilne in končne ničle iz besedilnega zagotovila števila.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Odstranite začetne in končne oklepaje iz oznake HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Odstranite posebne znake, uporabljene za čakajoče stanje prodaje.
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
