---
title: Date.FromText
---

# Date.FromText


Iš vietinio, universaliojo ir pasirinktinio Date formatų sukuriama Date reikšmė.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Sukuriama datos reikšmė iš tekstinės išraiškos.

-   `text`: tekstinė reikšmė, kuri konvertuojama į datos reikšmę.
-   `options`: pasirenkamas `record`, kurį galima pateikti papildomoms ypatybėms nurodyti. `record` gali būti šie laukai:
    -   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Daugiau informacijos rasite apsilankę https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, data bus analizuojama pasitelkus geriausią bandymą.
    -   `Culture`: kai `Format` nėra null, `Culture` lemia kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` reikšmė yra `null` arba praleista, naudojama `Culture.Current`.

Norint palaikyti senstelėjusias darbo eigas, `options` taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = null, Culture = parinktys]`.


## Examples

### Example #1
Konvertuokite `„2010-12-31“` į `date` reikšmę.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Raskite datą Grigaliaus kalendoriuje, atitinkančią 1400 pradžią Hidžros kalendoriuje.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Konvertuoti italų kalbos teksto datas su sutrumpintais mėnesiais stulpelyje Paskelbimo data į datos reikšmes.
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
