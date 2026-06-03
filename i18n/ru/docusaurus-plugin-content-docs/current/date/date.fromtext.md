---
title: Date.FromText
---

# Date.FromText


Создает дату из локальных, универсальных и пользовательских форматов дат.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Создает значение даты из текстового представления.

-   `text`: текстовое значение, преобразуемое в дату.
-   `options`: необязательный параметр `record`, который может быть предоставлен для указания дополнительных свойств. `record` может содержать следующие поля:
    -   `Format`: значение `text`, указывающее используемый формат. Дополнительные сведения см. на странице https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Пропуск этого поля или предоставление `null` приводит к синтаксическому анализу даты с использованием наилучших усилий.
    -   `Culture`: если `Format` не равен null, `Culture` управляет некоторыми спецификаторами формата. Например, в `"en-US"` `"MMM"` — это `"Jan", "Feb", "Mar", ...`, тогда как в `"ru-RU"` `"MMM"` — это `"янв", "фев", "мар", ...`. Если `Format` имеет значение `null`, параметр `Culture` определяет используемый формат по умолчанию. Если `Culture` равен `null` или опущен, используется `Culture.Current`.

Для поддержки устаревших рабочих процессов `options` также может быть текстовым значением. Это ведет себя так же, как если бы `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Преобразование `2010-12-31` в значение `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Поиск даты в григорианском календаре, которая соответствует началу 1400 года в календаре Хиджра.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Преобразуйте даты на итальянском языке с сокращенными месяцами в столбце "Дата публикации" в значения дат.
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
