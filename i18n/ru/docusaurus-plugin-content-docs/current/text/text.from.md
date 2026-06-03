---
title: Text.From
---

# Text.From


Создает текстовое значение из заданного значения.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Возвращает текстовое представление указанного значения.

-   `value`: значение для преобразования в текст. Значением может быть `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` или `binary` значение. Если переданное значение равно `null`, эта функция возвращает `null`.
-   `culture`: (Необязательно) Культура, используемая при преобразовании значения в текст (например, en-US).


## Examples

### Example #1
Создать текстовое значение из числа 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Получение текстового эквивалента указанной даты и времени.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Получить немецкий текстовый эквивалент указанной даты и времени.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Получение двоичного значения из текста, закодированного как шестнадцатеричное, и возврат значения на текст.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Получение строк в таблице, содержащих данные для Франции, и преобразование дат в текст с использованием французского языка и региональных параметров.
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
