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

Добавляет в таблицу <code>table</code> новый столбец <code>newColumnName</code> с репрезентативными значениями столбца <code>columnName</code>. Эти значения получаются по нечеткому соответствию значений в столбце <code>columnName</code> для каждой строки.    Возможно указание необязательного набора параметров <code>options</code>, задающих принцип сравнения ключевых столбцов. Допустимы следующие параметры:    <ul><li><code>Culture</code> : Позволяет группировать записи на основе правил конкретного языка и региональных параметров. Например, параметр Culture со значением &quot;ja-JP&quot; группирует записи согласно правилам японского языка. Значение по умолчанию&#160;— &quot;&quot;, при котором используется инвариантный английский язык и региональные параметры.</li><li><code>IgnoreCase</code> : Логическое значение (true/false), которое разрешает группирование ключей без учета регистра. Например, когда задано true, &quot;Виноград&quot; будет группироваться с &quot;виноград&quot;. Значение по умолчанию&#160;— true.</li><li><code>IgnoreSpace</code> : Логическое значение (true/false), которое разрешает объединять части текста для поиска групп. Например, когда задано true, &quot;Вино град&quot; будет группироваться с &quot;Виноград&quot;. Значение по умолчанию&#160;— true.</li><li><code>SimilarityColumnName</code> : Имя столбца, в котором показано сходство входного значения и репрезентативного значения для этих входных данных. Значение по умолчанию&#160;— NULL. В этом случае новый столбец для сходства не будет добавлен.</li><li><code>Threshold</code> : Число от 0,00 до 1,00, указывающее показатель подобия, при котором два значения объединяются в одну группу.    Например, &quot;Виноград&quot; и &quot;Виногрд&quot; (без буквы &quot;а&quot;) группируются вместе, только если задано значение этого параметра ниже 0,90.    Порог в 1,00 позволяет исключительно точные совпадения.     (Обратите внимание, что нечеткое &quot;точное совпадение&quot; может игнорировать такие различия, как регистр, порядок слов и пунктуация.)    Значение по умолчанию — 0,80.</li><li><code>TransformationTable</code> : Таблица, позволяющая группировать записи по настраиваемым сопоставлениям значений. Она должна содержать столбцы From (от чего) и To (к чему). Например, если таблица преобразования содержит в столбце From значение &quot;Виноград&quot;, а в столбце To значение &quot;Изюм&quot;, то эти два значения будут группироваться вместе. Преобразование будет применяться ко всем вхождениям текста, указанного в таблице. Согласно таблице выше, &quot;Виноград сладкий&quot; будет также группироваться с &quot;Изюм сладкий&quot;.</li></ul><br />    


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
