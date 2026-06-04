---
title: Text.Trim
---

# Text.Trim


Noņem visas norādītās sākuma un noslēdzošās rakstzīmes.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, noņemot visas sākuma un noslēdzošās rakstzīmes no norādītās `text`. Pēc noklusējuma tiek noņemtas visas sākuma un beigu baltstarpas rakstzīmes.

-   `text`: teksts, no kura jānoņem sākuma un noslēdzošās rakstzīmes.
-   `trim`: ignorē baltstarpas rakstzīmes, kas pēc noklusējuma ir apgrieztas. Šis parametrs var būt viena rakstzīme vai vienu rakstzīmju saraksts. Katra sākuma un beigu apgriešanas darbība tiek apturēta, kad tiek atrasta rakstzīme, kas nav apgriezta.


## Examples

### Example #1
Noņemiet sākuma un beigu baltstarpu no " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Noņemiet sākuma un noslēdzošās nulles no teksta attēlojuma.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Noņemt HTML taga sākuma un beigu iekavas.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Noņemiet īpašās rakstzīmes, kas tiek izmantotas ap gaidošo pārdošanas statusu.
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
