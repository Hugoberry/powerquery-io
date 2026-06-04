---
title: Text.Trim
---

# Text.Trim


Poistaa kaikki määritetyt alussa ja lopussa olevat merkit.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Palauttaa kaikkien alussa ja lopussa olevien merkkien poistamisen tuloksen määritetystä kohteesta `text`. Kaikki alussa ja lopussa olevat välilyönnit poistetaan oletusarvoisesti.

-   `text`: teksti, josta alussa ja lopussa olevat merkit poistetaan.
-   `trim`: ohittaa välilyönnit, jotka on rajattu pois oletusarvoisesti. Tämä parametri voi olla yksittäinen merkki tai yksittäisten merkkien luettelo. Jokainen alun ja lopun rajaustoiminto pysäytetään, kun rajaamaton merkki havaitaan.


## Examples

### Example #1
Poistaa alussa ja lopussa olevat välilyönnit kohteesta " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Poista alku- ja loppunollat luvun tekstimuodosta.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Poista alussa ja lopussa olevat hakasulkeet HTML-tunnisteesta.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Poista odottavan myyntitilan ympärillä käytettävät erikoismerkit.
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
