---
title: Date.From
---

# Date.From


Cria uma data a partir do valor especificado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Devolve um valor de data a partir do valor indicado.

-   `value`: o valor a converter em data. Se o valor indicado for `null`, esta função devolve `null`. Se o valor indicado for `date`, é devolvido `value`. Os valores dos tipos seguintes podem ser convertidos num valor `date`:
    -   `text`: um valor `date` a partir de uma representação textual. Consulte `Date.FromText` para obter detalhes.
    -   `datetime`: o componente de data de `value`.
    -   `datetimezone`: o componente de data do equivalente local de datetime de `value`.
    -   `number`: o componente de data do equivalente de datetime de um número de vírgula flutuante cujo componente integral é o número de dias antes ou depois da meia-noite de 30 de dezembro de 1899 e cujo componente fracionário representa a hora desse dia dividida por 24. Por exemplo, a meia-noite de 31 de dezembro de 1899 é representada por 1,0; as 06:00 de 1 de janeiro de 1900 são representadas por 2,25; a meia-noite de 29 de dezembro de 1899 é representada por -1,0; e as 06:00 de 29 de dezembro de 1899 são representadas por -1,25. O valor base é a meia-noite de 30 de dezembro de 1899. O valor mínimo é a meia-noite de 1 de janeiro de 0100. O valor máximo é o último momento de 31 de dezembro de 9999.
    -   Se `value` for de qualquer outro tipo, é devolvido um erro.
-   `culture`: a cultura do valor indicado (por exemplo, "en-US").


## Examples

### Example #1
Converter a data e hora especificadas num valor de data.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Converter o número especificado num valor de data.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Converta as datas de texto em alemão na coluna Data Publicada em valores de data.
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
