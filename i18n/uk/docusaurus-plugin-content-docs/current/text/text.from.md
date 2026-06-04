---
title: Text.From
---

# Text.From


Створює текстове значення із заданого значення.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Повертає текстове подання вказаного значення.

-   `value`: значення, яке потрібно перетворити на текст. Можливі значення: `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration`, `binary`. Якщо задане значення є значенням `null`, ця функція повертає значення `null`.
-   `culture`: (необовʼязково) культура, яка використовуватиметься під час перетворення значення на текст (наприклад, "uk-UA").


## Examples

### Example #1
Створити текстове значення з числа 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Отримати текстовий еквівалент указаних дати й часу.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Отримати німецький текстовий еквівалент указаних дати й часу.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Отримати двійкове значення з тексту, закодованого як шістнадцяткове, і повернути значення на текст.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Отримати рядки в таблиці, які містять дані для Франції, і перетворити дати на текст із використанням французької культури.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
