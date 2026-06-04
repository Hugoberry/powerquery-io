---
title: Date.From
---

# Date.From


Vytvorí dátum z danej hodnoty.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Vráti hodnotu dátumu z danej hodnoty.

-   `value`: Hodnota, ktorá sa má skryje k dátumu. Ak je daná hodnota `null`, táto funkcia vráti hodnotu `null`. Ak je daná hodnota `date`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno skonvertovať na hodnotu `date`:
    -   `text`: Hodnota `date` z textového vyjadrenia. Podrobnosti nájdete v `Date.FromText`.
    -   `datetime`: Komponent dátumu `value`.
    -   `datetimezone`: Komponent dátumu ekvivalentu miestneho dátumu a času `value`.
    -   `number`: Komponent dátumu ekvivalentu dátumu a času čísla s pohyblivou desatinnou čiarkou, ktorej integrál je počet dní pred polnocou alebo po polnoci, 30. decembra 1899 a ktorého zlomková súčasť predstavuje čas v daný deň vydelený číslom 24. Napríklad polnoc 31. decembra 1899 je vyjadrená hodnotou 1,0; 6:00, 1. januára 1900 predstavuje 2,25; polnoc, 29. decembra 1899 je zastúpená hodnotou -1.0; a 6:00, 29. decembra 1899 je vyjadrený hodnotou -1,25. Základná hodnota je polnoc 30. decembra 1899. Minimálna hodnota je polnoc, 1. január 0100. Maximálna hodnota je posledný okamih 31. decembra 9999.
    -   Ak je hodnota `value` iného typu, vráti sa chyba.
-   `culture`: Kultúra danej hodnoty (napríklad „en-US“).


## Examples

### Example #1
Konvertuje zadaný dátum a čas na hodnotu dátumu.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Konvertuje zadané číslo na hodnotu dátumu.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Konvertuje nemecké textové dátumy v stĺpci Dátum publikovania na dátumové hodnoty.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
