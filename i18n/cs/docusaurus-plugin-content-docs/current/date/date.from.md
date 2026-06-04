---
title: Date.From
---

# Date.From


Vytvoří datum z předané hodnoty.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Vrátí hodnotu kalendářního data z dané hodnoty.

-   `value`: Hodnota, která se má převést na datum. Pokud je daná hodnota `null`, vrátí tato funkce hodnotu `null`. Pokud je daná hodnota kalendářní datum `date`, vrátí se hodnota `value`. Na hodnotu data `date` lze převést hodnoty následujících typů:
    -   `text`: Hodnota kalendářního data`date` z textového vyjádření. Další informace najdete v popisu funkce `Date.FromText`.
    -   `datetime`: Část představující datum z čísla `value`.
    -   `datetimezone`: Část představující datum z ekvivalentu čísla `value` označujícího místní datum a čas.
    -   `number`: Část představující datum z ekvivalentu čísla s plovoucí desetinnou čárkou označujícího datum a čas, jehož nedílnou součástí je počet dní před nebo po půlnoci 30. prosince 1899 a jehož desetinná část představuje čas tohoto dne dělený 24. Například půlnoc 31. prosince 1899 je vyjádřena hodnotou 1,0; 1. ledna 1900 v 6 hodin ráno je vyjádřeno hodnotou 2,25; půlnoc 29. prosince 1899 je vyjádřena hodnotou -1,0 a 29. prosince 1899 v 6 hodin ráno je vyjádřeno hodnotou -1,25. Základní hodnotou je půlnoc 30. prosince 1899. Minimální hodnotou je půlnoc 1. ledna 0100. Maximální hodnotou je poslední okamžik 31. prosince 9999.
    -   Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.
-   `culture`: Jazyková verze dané hodnoty (například en-US).


## Examples

### Example #1
Převede zadanou hodnotu data a času na hodnotu kalendářního data.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Převede zadané číslo na hodnotu kalendářního data.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Umožňuje převést německá textová kalendářní data ve sloupci s datem publikování na hodnoty kalendářních dat.
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
