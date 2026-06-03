---
title: Date.FromText
---

# Date.FromText


Crea una data da formati date locali, universali e personalizzati.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Crea un valore di data da una rappresentazione testuale.

-   `text`: un valore di testo da convertire in una data.
-   `options`: `record` facoltativo che può essere fornito per specificare proprietà aggiuntive. Il `record` può contenere i campi seguenti:
    -   `Format`: valore `text` che indica il formato da usare. Per altri dettagli, vedere https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica `null`, l'analisi della data verrà eseguita nel modo più efficiente possibile.
    -   `Culture`: quando `Format` non è Null, `Culture` controlla alcuni identificatori di formato. Ad esempio, in `"en-US"` `"MMM"` è `"Jan", "Feb", "Mar", ...` , mentre in `"ru-RU"` `"MMM"` è `>"янв", "фев", "мар", ...`. Quando `Format` è `null`, `Culture` controlla il formato predefinito da usare. Quando `Culture` è `null` o omesso, viene usato `Culture.Current`.

Per supportare i flussi di lavoro legacy, `options` può anche essere un valore di testo. Questo comportamento è identico a quello di `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertire `2010-12-31` in un valore `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Trovare la data nel calendario gregoriano che corrisponde all'inizio di 1400 nel calendario Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Converti le date di testo in italiano con mesi abbreviati nella colonna Data di pubblicazione in valori di data.
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
