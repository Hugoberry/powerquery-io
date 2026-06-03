---
title: Date.FromText
---

# Date.FromText


Erstellt ein Datum aus lokalen, universellen und benutzerdefinierten Datumsformaten.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Erstellt einen Datumswert auf der Grundlage einer Textdarstellung.

-   `text`: Der Textwert, der in ein Datum umgewandelt werden soll.
-   `options`: Ein optionaler `record`, der zur Angabe zusätzlicher Eigenschaften angegeben werden kann. Der `record` kann die folgenden Felder enthalten:
    -   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Informationen finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird das Datum nach bestem Bemühen analysiert.
    -   `Culture`: Wenn `Format` nicht null ist, regelt `Culture` einige Formatbezeichner. Zum Beispiel ist `„MMM“` in `„en-US“` `„Jan“, „Feb“, „Mar“, …`, während `„MMM“` in `„ru-RU“` `„янв“, „фев“, „мар“, …` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wurde, wird `Culture.Current` verwendet.

Um Legacyworkflows zu unterstützen, kann `options` auch ein Textwert sein. Dies hat dasselbe Verhalten wie `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertiertieren Sie `“2010-12-31“` in einen `date`\-Wert.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Ermittelt Sie das Datum im gregorianischen Kalender, das dem Anfang des Jahres 1400 im Hijri-Kalender entspricht.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Konvertiert die italienischen Textdaten mit abgekürzten Monaten in der Spalte „Posted Date“ in Datumswerte.
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
