---
title: Text.Trim
---

# Text.Trim


Барлық көрсетілген бастапқы және соңындағы таңбаларды жояды.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Көрсетілгеннен `text` ішінен барлық бастапқы және соңындағы таңбаларды жою нәтижесін қайтарады. Әдепкі бойынша, барлық бастапқы және соңындағы бос орын таңбалары жойылады.

-   `text`: бастапқы және соңындағы таңбаларды жойғыңыз келетін мәтін.
-   `trim`: әдепкі бойынша кесілген бос орын таңбаларын қайта анықтайды. Бұл параметр жалғыз таңба немесе жалғыз таңбалар тізімі болуы мүмкін. Әрбір бастапқы және соңғы таңбаны кесу әрекеті кесілмеген таңба кездескен кезде тоқтайды.


## Examples

### Example #1
" a b c d " мәтінінен алдындағы және соңындағы артық бос орындарды жою.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Санның мәтіндік көрінісінен бастапқы және соңындағы нөлдерді жою.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
HTML тегінен бастапқы және соңындағы жақшаларды жою.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Күтудегі сату күйі айналасында пайдаланылатын арнайы таңбаларды жою.
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
