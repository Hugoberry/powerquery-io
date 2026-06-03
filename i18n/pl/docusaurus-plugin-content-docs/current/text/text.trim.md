---
title: Text.Trim
---

# Text.Trim


Usuwa wszystkie określone znaki wiodące i końcowe.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Zwraca wynik usunięcia wszystkich znaków wiodących i końcowych z określonej wartości tekstowej `text`. Domyślnie wszystkie wiodące i końcowe znaki odstępu są usuwane.

-   `text`: tekst, z którego mają zostać usunięte znaki wiodące i końcowe.
-   `trim`: zastępuje znaki odstępu, które są domyślnie przycinane. Ten parametr może być pojedynczym znakiem lub listą pojedynczych znaków. Każda operacja przycinania znaków wiodących i końcowych jest przerywana w przypadku napotkania nieprzyciętego znaku.


## Examples

### Example #1
Usuń spacje wiodące i końcowe z wartości „ a b c d ”.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Usuń zera wiodące i końcowe z tekstowej reprezentacji liczby.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Usuń nawiasy wiodące i końcowe z tagu HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Usuń znaki specjalne używane wokół stanu oczekującej sprzedaży.
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
