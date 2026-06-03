---
title: Date.From
---

# Date.From


Erstellt ein Datum auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Gibt einen Datumswert aus dem angegebenen Wert zurück.

-   `value`: Der Wert, der in ein Datum umgewandelt werden soll. Wenn der angegebene Wert `null` ist, gibt diese Funktion `null` zurück. Wenn der angegebene Wert `date` ist, wird `value` zurückgegeben. Werte der folgenden Typen können in einen `date`\-Wert konvertiert werden:
    -   `text`: Ein `date`\-Wert aus der Textdarstellung. Weitere Informationen finden Sie unter `Date.FromText`.
    -   `datetime`: Die Datumskomponente von `value`.
    -   `datetimezone`: Die Datumskomponente des lokalen Datum/Uhrzeit-Äquivalents von `value`.
    -   `number`: Die Datumskomponente des Datum/Uhrzeit-Äquivalents einer Gleitkommazahl, deren ganzzahlige Komponente die Anzahl der Tage vor oder nach Mitternacht am 30. Dezember 1899 ist und deren Bruchkomponente die Uhrzeit an diesem Tag geteilt durch 24 darstellt. Beispielsweise wird Mitternacht am 31. Dezember 1899 durch 1,0 dargestellt; 6 Uhr morgens am 1. Januar 1900 wird durch 2,25 dargestellt; Mitternacht am 29. Dezember 1899 wird durch -1,0 dargestellt; und 6 Uhr morgens am 29. Dezember 1899 wird durch -1,25 dargestellt. Der Basiswert ist Mitternacht am 30. Dezember 1899. Der Mindestwert ist Mitternacht am 1. Januar 0100. Der Höchstwert ist der letzte Moment des 31. Dezember 9999.
    -   Wenn `value` einen anderen Typ aufweist, wird ein Fehler zurückgegeben.
-   `culture`: Die Kultur des angegebenen Werts (z. B. „en-US“).


## Examples

### Example #1
Konvertiert das angegebene Datum und die angegebene Uhrzeit in einen Datumswert.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Konvertieren Sie die angegebene Zahl in einen Datumswert.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Konvertier deutsche-textuelle-Datumsangaben in der Spalte „Posted Date“ in Datumswerte.
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
