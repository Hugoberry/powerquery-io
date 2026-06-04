---
title: Date.FromText
---

# Date.FromText


Створює дату з місцевого, всесвітнього та настроюваного форматів дати.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Створює значення дати з текстового представлення.

-   `text`: текстове значення, яке потрібно додати до дати.
-   `options`: додатковий параметр `record`, який можна надати, щоб указати додаткові властивості. Параметр `record` може містити такі поля:
    -   `Format`: значення `text`, яке вказує формат, який потрібно використовувати. Докладні відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 та https://go.microsoft.com/fwlink/?linkid=2180105. Пропускання цього поля або введення `null` призводить до аналізу дати з максимальними зусиллями.
    -   `Culture`: якщо параметр `Format` не має Null-значення, параметр `Culture` керує певними специфікаторами формату. Наприклад, для `"en-US"` параметр `"MMM"` виглядатиме так: `"Jan", "Feb", "Mar"...`. Тоді як для `"uk-UK"` параметр `"MMM"` виглядатиме так: `"січ", "лют", "бер"...`. Якщо параметру `Format` задано значення `null`, параметр `Culture` визначає стандартний формат. Коли параметр `Culture` має значення `null` або його не вказано, використовується `Culture.Current`.

Щоб підтримувати застарілі робочі процеси, `options` також може мати текстове значення. Така сама поведінка, як у випадку, якщо `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Перетворення `2010-12-31` на значення `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Пошук у григоріанському календарі дати, яка відповідає початку 1400 року за календарем Хиджра.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Перетворення текстових дат, написаних італійською мовою, зі скороченими назвами місяців у стовпці "Дата публікації" на значення дат.
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
