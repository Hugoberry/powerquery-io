---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


Выполняет нечеткое соединение таблиц по указанным столбцам и выводит результат соединения в новом столбце.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

Соединяет строки таблицы `table1` со строками таблицы `table2` на основе нечеткого соответствия значений ключевых столбцов, выбранных в `key1` (для `table1`) и в `key2` (для `table2`). Результаты записываются в столбец с именем `newColumnName`.

Нечеткое соответствие — это сравнение текста на основе похожести, а не полного совпадения.

Необязательное значение `joinKind` указывает тип выполняемого соединения. По умолчанию выполняется левое внешнее соединение, если `joinKind` не указано. Возможны следующие значения:

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

Необязательный набор `joinOptions` может быть включен для указания способа сравнения ключевых столбцов. Возможны следующие значения:

-   `ConcurrentRequests` : Число от 1 до 8, указывающее количество параллельных потоков, используемых для нечеткого соответствия. Значение по умолчанию — 1.
-   `Culture` : Позволяет сопоставлять записи на основе правил конкретного языка и региональных параметров. Например, параметр Culture со значением "ja-JP" сопоставляет записи согласно правилам японского языка. Значение по умолчанию — "", при котором используется инвариантный английский язык и региональные параметры.
-   `IgnoreCase` : Логическое значение (true/false), которое разрешает сопоставление ключей без учета регистра. Например, когда задано true, "Виноград" будет совпадать с "виноград". Значение по умолчанию — true.
-   `IgnoreSpace` : Логическое значение (true/false), которое разрешает объединять части текста для поиска соответствий. Например, когда задано true, "Вино град" будет совпадать с "Виноград". Значение по умолчанию — true.
-   `NumberOfMatches` : Целое число, задающее максимальное количество соответствующих строк, которые могут быть возвращены для каждой строки ввода. Например, значение 1 возвратит для каждой строки ввода не более одного совпадения. Если этот параметр не указан, возвращаются все соответствующие строки.
-   `SimilarityColumnName` : Имя столбца, в котором показано сходство входного значения и репрезентативного значения для этих входных данных. Значение по умолчанию — NULL. В этом случае новый столбец для сходства не будет добавлен.
-   `Threshold` : Число от 0,00 до 1,00, указывающее показатель подобия, при котором два значения считаются совпадающими. Например, "Виноград" и "Виногрд" (без буквы "а") будут соответствовать друг другу, только если задано значение этого параметра ниже 0,90. Порог в 1,00 позволяет исключительно точные совпадения. (Обратите внимание, что нечеткое "точное совпадение" может игнорировать такие различия, как регистр, порядок слов и пунктуация.) Значение по умолчанию — 0,80.
-   `TransformationTable` : Таблица, позволяющая сопоставлять записи по настраиваемым сопоставлениям значений. Она должна содержать столбцы From (от чего) и To (к чему). Например, если таблица преобразования содержит в столбце From значение "Виноград", а в столбце To значение "Изюм", то эти два значения будут считаться соответствующими друг другу. Преобразование будет применяться ко всем вхождениям текста, указанного в таблице. Согласно таблице выше, "Виноград сладкий" будет также соответствовать тексту "Изюм сладкий".


## Examples

### Example #1
Левое внутреннее нечеткое соединение двух таблиц на основе \[FirstName\]
```powerquery
Table.FuzzyNestedJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    "NestedTable",
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        NestedTable = Table.FromRecords({
            [
                CustomerStateID = 1,
                FirstName2 = "Bob",
                State = "TX"
            ],
            [
                CustomerStateID = 2,
                FirstName2 = "bOB",
                State = "CA"
            ]
        })
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        NestedTable = Table.FromRecords({})
    ]
})
```




## Category
Table.Transformation
