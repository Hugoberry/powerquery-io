---
title: Text.Trim
---

# Text.Trim


Fjerner alle de angivne foranstillede og efterstillede tegn.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Returnerer resultatet af at fjerne alle foranstillede og efterstillede tegn fra den angivne `text`. Som standard fjernes alle foranstillede og efterstillede mellemrumstegn.

-   `text`: Den tekst, som de foranstillede og efterstillede tegn skal fjernes fra.
-   `trim`: Tilsidesætter de mellemrumstegn, der som standard er trimmet. Denne parameter kan enten være et enkelt tegn eller en liste over enkelte tegn. Hver foranstillet og efterstillet trimningshandling stopper, når der registreres et ikke-trimmet tegn.


## Examples

### Example #1
Fjern foranstillede og efterstillede mellemrum fra " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Fjern foranstillede og efterstillede nuller fra tekstrepræsentationen af et tal.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Fjern de foranstillede og efterstillede parenteser fra en HTML-kode.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Fjern de specialtegn, der bruges omkring den afventende salgsstatus.
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
