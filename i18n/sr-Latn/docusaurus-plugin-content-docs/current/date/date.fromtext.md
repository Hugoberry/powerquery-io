---
title: Date.FromText
---

# Date.FromText


Kreira datum iz lokalnih, univerzalnih i prilagođenih formata datuma.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Kreira vrednost datuma od tekstualne reprezentacije.

-   `text`: Vrednost teksta koju treba pretvoriti u datum.
.-   `options`: Opcioni `record` koji se može obezbediti za određivanje dodatnih svojstava. `record` može da sadrži sledeća polja:
    -   `Format`: Vrednost `text` koja označava format koji treba koristiti. Više detalja potražite u članku https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` dovodi do raščlanjivanja datuma pomoću najboljeg napora.
    -   `Culture`: Kada `Format` nije null, `Culture` kontroliše neke specifikacije formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljeno, koristi se `Culture.Current`.

Da biste podržali zastarele tokove posla, `options` može da bude i tekstualna vrednost. Ovo ima isto ponašanje kao da je `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertuj `"2010-12-31"` u `date` vrednost.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Pronađi datum u gregorijanskom kalendaru koji odgovara početku 1400. godine u Hidžra kalendaru.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Konvertujte tekstualne datume na italijanskom sa skraćenim mesecima u koloni Datum objave u vrednosti datuma.
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
