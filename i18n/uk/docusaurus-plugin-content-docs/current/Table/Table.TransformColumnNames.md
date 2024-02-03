---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Перетворює назви стовпців, використовуючи вказану функцію.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Перетворює імена стовпців, використовуючи вказану функцію <code>nameGenerator</code>. Нижче наведено припустимі параметри.    <div>      <code>MaxLength</code> – дає змогу визначити максимальну довжину нових імен для стовпців. Якщо функція повертатиме довші імена, вони усікатимуться.    </div>    <div>      <code>Comparer</code> – використовується для контролю над порівнянням під час створення інших імен для стовпців. Такі функції дають змогу порівнювати значення без урахування регістра або з огляду на культуру й локалізацію.    </div>    <div>      Мова формул передбачає наведені нижче вбудовані засоби порівняння.    </div>    <ul>      <li><code>Comparer.Ordinal</code> – слугує для точного порядкового порівняння.</li>      <li><code>Comparer.OrdinalIgnoreCase</code> – виконує точне порядкове порівняння без урахування регістра.</li>      <li> <code>Comparer.FromCulture</code> – виконує порівняння з огляду на культуру.</li>    </ul>    


## Examples

### Example #1 
У назвах стовпців видаліть символ &lt;code&gt;#(tab)&lt;/code&gt;
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Перетворення імен стовпців для створення нечутливих до регістра імен із довжиною 6.
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
