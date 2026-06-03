---
title: Date.From
---

# Date.From


Tworzy datę na podstawie danej wartości.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Zwraca wartość daty na podstawie podanej wartości.

-   `value`: wartość, która ma być przekonwertowana na datę. Jeśli podaną wartością jest `null`, ta funkcja zwraca wartość `null`. Jeśli podaną wartością jest `date`, zwracana jest wartość `value`. Wartości następujących typów można przekonwertować na wartość `date`:
    -   `text`: wartość `date` z reprezentacji tekstowej. Aby uzyskać szczegółowe informacje, zobacz `Date.FromText`.
    -   `datetime`: składnik daty `value`.
    -   `datetimezone`: składnik daty lokalnego odpowiednika datetime `value`.
    -   `number`: składnik odpowiednika datetime liczby zmiennoprzecinkowej, której składnik całkowity jest liczbą dni przed lub po północy 30 grudnia 1899 r. i której składnik ułamkowy reprezentuje czas w tym dniu podzielony przez 24. Na przykład północ, 31 grudnia 1899 r., jest reprezentowana przez 1,0; godzina 6 rano, 1 stycznia 1900 r. jest reprezentowana przez 2,25; północ, 29 grudnia 1899 r. jest reprezentowana przez -1,0; a godzina 6 rano, 29 grudnia 1899 r. jest reprezentowana przez -1,25. Wartością bazową jest północ, 30 grudnia 1899 roku. Wartość minimalna to północ, 1 stycznia 0100 roku. Wartość maksymalna to ostatni moment 31 grudnia 9999 roku.
    -   Jeśli `value` jest innego typu, zwracany jest błąd.
-   `culture`: kultura danej wartości (na przykład „en-US”).


## Examples

### Example #1
Konwertuj określoną datę i godzinę na wartość daty.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Konwertuj określoną liczbę na wartość daty.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Przekonwertuj niemieckie daty tekstowe w kolumnie Data publikacji na wartości daty.
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
