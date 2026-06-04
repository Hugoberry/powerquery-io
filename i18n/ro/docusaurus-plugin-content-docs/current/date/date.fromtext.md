---
title: Date.FromText
---

# Date.FromText


Creează o dată din formate de dată locale, universale și particularizate.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Creează o valoare dată dintr-o reprezentare textuală.

-   `text`: o valoare text de convertit într-o dată.
-   `options`: o `record` opțională care poate fi furnizată pentru a specifica proprietăți suplimentare. `record` poate conține următoarele câmpuri:
    -   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau dacă furnizați `null` are ca rezultat analizarea datei folosind un efort optim.
    -   `Culture`: Când `Format` nu este nul, `Culture` controlează unii specificatori de format. De exemplu, în `"en-US"` `"MMM"` este `"Ian", "Feb", "Mar", ...` , în `"ru-RU"` `"MMM"` este `"яннн", "фар", "мар", ...` . Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Când `Culture` este `null` sau omis, se utilizează `Culture.Current`.

Pentru a accepta fluxuri de lucru moștenite, `options` poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Efectuați conversia `"2010-12-31"` într-o valoare `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Găsiți data din calendarul gregorian care corespunde începutului anului 1400 din calendarul Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Efectuați conversia datelor de text în italiană cu luni abreviate din coloana Dată postată în valori dată.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
