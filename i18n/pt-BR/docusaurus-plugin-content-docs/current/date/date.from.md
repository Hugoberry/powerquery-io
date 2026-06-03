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

Retorna um valor de data do valor fornecido.

-   `value`: o valor a ser convertido em uma data. Se o valor fornecido for `null`, esta função retornará `null`. Se o valor fornecido for `date`, `value` será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor `date`:
    -   `text`: Um valor `date` da representação textual. Confira `Date.FromText` para obter detalhes.
    -   `datetime`: o componente de data do `value`.
    -   `datetimezone`: o componente de data do equivalente de datetime local de `value`.
    -   `number`: o componente de data do datetime equivalente a um número de ponto flutuante cujo componente integral é o número de dias antes ou depois da meia-noite de 30 de dezembro de 1899 e cujo componente fracionário representa a hora nesse dia dividida por 24. Por exemplo, meia-noite de 31 de dezembro de 1899 é representado por 1,0; 6h de 1º de janeiro de 1900 é representado por 2,25; meia-noite de 29 de dezembro de 1899 é representado por -1,0; e 6h de 29 de dezembro de 1899 é representado por -1,25. O valor base é meia-noite de 30 de dezembro de 1899. O valor mínimo é meia-noite de 1º de janeiro de 0100. O valor máximo é o último momento de 31 de dezembro de 9999.
    -   Se `value` for de qualquer outro tipo, um erro será retornado.
-   `culture`: a cultura do valor fornecido (por exemplo, "en-US").


## Examples

### Example #1
Converta a data e hora especificadas em um valor de data.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Converta o número especificado em um valor de data.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Converta as datas de texto em alemão na coluna Data de Postagem em valores de data.
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
