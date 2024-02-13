---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Преобразует имена столбцов с помощью предоставленной функции.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Преобразует имена столбцов с помощью предоставленной функции <code>nameGenerator</code>. Допустимые параметры:    <div>      <code>MaxLength</code> — максимальная длина имен новых столбцов. Если функция создает более длинное имя, оно будет усечено.    </div>    <div>      <code>Comparer</code> — используется для управления сравнением при создании имен столбцов. Функции сравнения можно использовать для сравнений, не учитывающих регистр или учитывающих языковой стандарт и региональные параметры.    </div>    <div>      В языке формул доступны следующие встроенные функции сравнения:    </div>    <ul>      <li><code>Comparer.Ordinal</code> — используется для точного сравнения по порядковому номеру</li>      <li><code>Comparer.OrdinalIgnoreCase</code> — используется для точного сравнения по порядковому номеру без учета регистра</li>      <li> <code>Comparer.FromCulture</code> — используется для сравнения с учетом языка и региональных параметров</li>    </ul>    


## Examples

### Example #1 
Удаление символа &lt;code&gt;#(tab)&lt;/code&gt; из имен столбцов
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Преобразование имен столбцов для создания имен длиной 6 символов без учета регистра.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
