---
title: Date.FromText
---

# Date.FromText


Tworzy wartość „date” na podstawie lokalnych, uniwersalnych i niestandardowych formatów wartości „date”.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Tworzy wartość daty na podstawie reprezentacji tekstowej.

-   `text`: wartość tekstowa do przekonwertowania na datę.
-   `options`: opcjonalny parametr `record`, który można podać w celu określenia dodatkowych właściwości. Parametr `record` może zawierać następujące pola:
    -   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej informacji, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` powoduje przeanalizowanie daty przy użyciu najlepszego rozwiązania.
    -   `Culture`: kiedy `Format` nie ma wartości null, wartość `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w `„en-US”` `„MMM”` to `„Jan”, „Feb”, „Mar”, ...`, podczas gdy `„ru-RU”` `„MMM”` to `„янв”, „фев”, „мар”, ...`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy `Culture` ma wartość `null` lub jest pominięta, jest używana wartość `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, `options` może być również wartością tekstową. Zachowuje się on tak samo, jak `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Przekonwertuj wartość `"2010-12-31"` na wartość typu `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Znajdź w kalendarzu gregoriańskim datę odpowiadającą początkowi 1400 roku w kalendarzu Hidżry.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Konwertuj włoskie daty tekstowe ze skróconymi miesiącami w kolumnie Data publikacji na wartości daty.
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
