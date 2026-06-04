---
title: Date.FromText
---

# Date.FromText


Vytvorí dátum z lokálneho, univerzálneho a vlastného formátu dátumu.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Vytvorí hodnotu dátumu z textového vyjadrenia.

-   `text`: Textová hodnota na skrytie dátumu.
-   `options`: Voliteľný `záznam`, ktorý možno zadať na zadanie ďalších vlastností. `Záznam` môže obsahovať tieto polia:
    -   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete v https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie kódu `null` má za následok analýzu dátumu s maximálne úsilie.
    -   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...` , zatiaľ čo v `"ru-RU"` `"MMM"` je `"$", "ааа", "аар", ...` . Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď je `Culture` `null` alebo sa vynechá, použije sa `Culture.Current`.

Ak chcete podporovať staršie pracovné postupy, `options` môže byť aj textová hodnota. Toto sa správa rovnako, ako keby `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertujte hodnotu`"2010-12-31"` na hodnotu `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Nájdite dátum v gregoriánskom kalendári, ktorý zodpovedá začiatku roku 1400 v kalendári Hedžra.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Konvertujte dátumy v talianskom texte so skrátenými mesiacmi v stĺpci Uverejnený dátum na hodnoty dátumu.
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
