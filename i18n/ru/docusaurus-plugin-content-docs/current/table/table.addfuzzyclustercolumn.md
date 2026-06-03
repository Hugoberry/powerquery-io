---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Добавляет новый столбец с репрезентативными значениями, полученными нечетким группированием значений указанного столбца в таблице.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Добавляет в таблицу `table` новый столбец `newColumnName` с репрезентативными значениями столбца `columnName`. Эти значения получаются по нечеткому соответствию значений в столбце `columnName` для каждой строки.

Возможно указание необязательного набора параметров `options`, задающих принцип сравнения ключевых столбцов. Допустимы следующие параметры:

-   `Culture` : Позволяет группировать записи на основе правил конкретного языка и региональных параметров. Например, параметр Culture со значением "ja-JP" группирует записи согласно правилам японского языка. Значение по умолчанию — "", при котором используется инвариантный английский язык и региональные параметры.
-   `IgnoreCase` : Логическое значение (true/false), которое разрешает группирование ключей без учета регистра. Например, когда задано true, "Виноград" будет группироваться с "виноград". Значение по умолчанию — true.
-   `IgnoreSpace` : Логическое значение (true/false), которое разрешает объединять части текста для поиска групп. Например, когда задано true, "Вино град" будет группироваться с "Виноград". Значение по умолчанию — true.
-   `SimilarityColumnName` : Имя столбца, в котором показано сходство входного значения и репрезентативного значения для этих входных данных. Значение по умолчанию — NULL. В этом случае новый столбец для сходства не будет добавлен.
-   `Threshold` : Число от 0,00 до 1,00, указывающее показатель подобия, при котором два значения объединяются в одну группу. Например, "Виноград" и "Виногрд" (без буквы "а") группируются вместе, только если задано значение этого параметра ниже 0,90. Порог в 1,00 позволяет исключительно точные совпадения. (Обратите внимание, что нечеткое "точное совпадение" может игнорировать такие различия, как регистр, порядок слов и пунктуация.) Значение по умолчанию — 0,80.
-   `TransformationTable` : Таблица, позволяющая группировать записи по настраиваемым сопоставлениям значений. Она должна содержать столбцы From (от чего) и To (к чему). Например, если таблица преобразования содержит в столбце From значение "Виноград", а в столбце To значение "Изюм", то эти два значения будут группироваться вместе. Преобразование будет применяться ко всем вхождениям текста, указанного в таблице. Согласно таблице выше, "Виноград сладкий" будет также группироваться с "Изюм сладкий".


## Examples

### Example #1
Найдите репрезентативные значения для расположения сотрудников.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
