---
title: Date.FromText
---

# Date.FromText


Ustvari datum iz lokalnih, univerzalnih in datumskih oblik po meri.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Ustvari datumsko vrednost iz besedilnega zastopanja.

-   `text`: Besedilna vrednost, ki bo pretvorjena v datum.
-   `options`: Izbirna `record`, ki jo je mogoče navesti za določanje dodatnih lastnosti. Polje `record` lahko vsebuje naslednja polja:
    -   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Za več podrobnosti pojdite na https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete `null` rezultate pri razčlenjevanju, se bo datum razčlenil po najboljših močeh.
    -   `Culture`: Če vrednost `Format` ni ničelna, `Culture` nadzoruje nekatere določitelje oblike zapisa. Na primer, v `"en-US"` `""MMM"` je `"Jan","Feb","Mar"...`, za `"ru-RU"` pa `"MMM"` predstavlja `"янв","фев","мар"...`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je `Culture` `null` ali izpuščena, je uporabljena koda `Culture.Current`.

Za podporo podedovanih potekov dela je `options` lahko tudi besedilna vrednost. To se obnaša enako, kot če je `= [Format = null, Culture = options]`.


## Examples

### Example #1
Pretvorite `2010-12-31` v vrednost `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Poiščite datum v gregorijanskem koledarju, ki ustreza začetku leta 1400 v koledarju Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Pretvorite besedilne datume v italijanščini z okrajšanimi meseci iz stolpca"Datum objave"v datumske vrednosti.
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
