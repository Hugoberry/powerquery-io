---
title: Text.Trim
---

# Text.Trim


Pašalinami visi nurodyti priekyje ir pabaigoje esantys simboliai.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Pateikiamas visų pradžioje ir pabaigoje esančių simbolių pašalinimo iš nurodyto `text` rezultatas. Pagal numatytuosius parametrus pašalinami visi tarpo pradžioje ir pabaigoje esantys simboliai.

-   `text`: tekstas, iš kurio turi būti pašalinti pradžioje ir pabaigoje esantys simboliai.
-   `trim`: perrašo tarpo simbolius, kurie koreguojami pagal numatytuosius parametrus. Šis parametras gali būti vienas simbolis arba vieno simbolio sąrašas. Kiekviena pradžios ir pabaigos koregavimo operacija sustabdoma, kai aptinkamas neapkarpytas simbolis.


## Examples

### Example #1
Pašalinkite tarpą priekyje ir gale iš „ a b c d “.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Pašalinkite priekyje ir pabaigoje esančius nulius iš skaičiaus tekstinės pateikties.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Pašalinkite HTML žymės priekyje ir gale esančius skliaustus.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Pašalinkite specialiuosius simbolius, naudojamus laukiančio pardavimo būsenai.
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
