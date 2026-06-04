---
title: Date.From
---

# Date.From


Creează o dată din valoarea dată.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Returnează o valoare dată din valoarea dată.

-   `value`: valoarea de convertit într-o dată. Dacă valoarea dată este `null`, această funcție returnează `null`. Dacă valoarea dată este `date`, se returnează `value`. Valorile din următoarele tipuri pot fi convertite într-o valoare `date`:
    -   `text`: o valoare `date` din reprezentarea textuală. Consultați `Date.FromText` pentru detalii.
    -   `datetime`: componenta dată a `value`.
    -   `datetimezone`: componenta dată a echivalentului datetime local al `value`.
    -   `number`: componenta dată a echivalentului datetime a unui număr cu virgulă mobilă a cărui componentă integrală este numărul de zile înainte sau după miezul nopții, 30 decembrie 1899, și a cărui componentă fracțională reprezintă ora din ziua respectivă împărțită la 24. De exemplu, miezul nopții, 31 decembrie 1899 este reprezentat de 1,0; 6 A.M., 1 ianuarie 1900 este reprezentat prin 2.25; miezul nopții, 29 decembrie 1899 este reprezentat de -1.0; și 6 A.M., 29 decembrie 1899 este reprezentat de -1.25. Valoarea de bază este miezul nopții, 30 decembrie 1899. Valoarea minimă este miezul nopții, 1 ianuarie 0100. Valoarea maximă este ultimul moment din 31 decembrie 9999.
    -   Dacă `value` este de orice alt tip, se returnează o eroare.
-   `culture`: cultura valorii date (de exemplu, „en-US”).


## Examples

### Example #1
Efectuați conversia datei și orei specificate într-o valoare dată.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Convertiți numărul specificat într-o valoare dată.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Efectuați conversia datelor text germane din coloana Dată postată în valori dată.
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
