---
title: Text.Trim
---

# Text.Trim


Eltávolítja az összes megadott kezdő és záró karaktert.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

A megadott `text` összes kezdő és záró karaktere eltávolításának eredményét adja vissza. Alapértelmezés szerint az összes kezdő és záró szóköz karakter el lesz távolítva.

-   `text`: Az a szöveg, amelyből a kezdő és záró karaktereket el kell távolítani.
-   `trim`: Felülbírálja az alapértelmezés szerint levágott szóköz karaktereket. Ez a paraméter lehet egyetlen karakter vagy egyetlen karakterek listája. Minden egyes kezdő és záró levágási művelet leáll, amikor a rendszer nem levágott karakterrel találkozik.


## Examples

### Example #1
A kezdő és záró szóközök eltávolítása a „ a b c d ” szövegből
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
A kezdő és záró nullák eltávolítása egy szám szöveges ábrázolásából.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
A kezdő és záró zárójelek eltávolítása egy HTML-címkéből.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
A függőben lévő értékesítési állapot körül használt speciális karakterek eltávolítása.
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
