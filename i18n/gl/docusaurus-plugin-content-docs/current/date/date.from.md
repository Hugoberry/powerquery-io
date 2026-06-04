---
title: Date.From
---

# Date.From


Crea una data a partir do valor indicado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Devolve un valor de data a partir do valor dado.

-   `value` : O valor que se vai converter nunha data. Se o valor dado é `null`, esta función devolve `null`. Se o valor dado é `data`, devólvese `valor`. Os valores dos seguintes tipos pódense converter nun valor de `data`:
    -   `text`: Un valor de `data` a partir da representación textual. Consulta `Date.FromText` para obter máis detalles.
    -   `datetime`: O compoñente de data do `value`.
    -   `datetimezone`: O compoñente de data do equivalente local de data e hora de `value`.
    -   `número`: O compoñente de data do equivalente de data e hora dun número de coma flotante cuxo compoñente integral é o número de días antes ou despois da medianoite do 30 de decembro de 1899 e cuxo compoñente fraccionario representa a hora dese día dividida por 24. Por exemplo, a medianoite do 31 de decembro de 1899 represéntase por 1,0; as 6:00 do 1 de xaneiro de 1900 represéntanse por 2,25; a medianoite do 29 de decembro de 1899 represéntase por -1,0; e as 6:00 do 29 de decembro de 1899 represéntanse por -1,25. O valor base é a medianoite do 30 de decembro de 1899. O valor mínimo é a medianoite do 1 de xaneiro de 01:00. O valor máximo é o último momento do 31 de decembro de 9999.
    -   Se `value` é de calquera outro tipo, devólvese un erro.
-   `culture` : A cultura do valor dado (por exemplo, "en-US").


## Examples

### Example #1
Converte a data e hora especificadas nun valor de data.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Converte o número especificado nun valor de data.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Converte as datas de texto en alemán na columna Data de publicación en valores de data.
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
