---
title: Text.Trim
---

# Text.Trim


Odebere všechny zadané úvodní a koncové znaky.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vrátí výsledek odebrání všech úvodních a koncových znaků ze zadaného `text`. Ve výchozím nastavení se odeberou všechny úvodní a koncové prázdné znaky.

-   `text`: Text, ze kterého mají být odebrány úvodní a koncové znaky.
-   `trim`: Přepíše prázdné znaky, které jsou ve výchozím nastavení oříznuty. Tento parametr může být buď jeden znak, nebo seznam jednotlivých znaků. Každá operace oříznutí úvodních a koncových znaků se zastaví, když je zjištěn neoříznutý znak.


## Examples

### Example #1
Odebere úvodní a koncové mezery z hodnoty „ a b c d “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Odebere úvodní a koncové nuly z textového vyjádření čísla.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Odebere počáteční a koncové závorky ze značky HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Odebere speciální znaky, které se používají kolem stavu prodeje čekajícího na vyřízení.
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
