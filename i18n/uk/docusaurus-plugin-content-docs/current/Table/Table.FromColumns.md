---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Створює таблицю зі списку стовпців і вказаних значень.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Створює таблицю типу <code>columns</code> зі списку <code>lists</code>, що містить вкладені списки з іменами та значеннями стовпців.    Якщо деякі стовпці мають більше значень, ніж інші, відсутні значення заповнюватимуться стандартним (Null-значенням, якщо стовпці це допускають).


## Examples

### Example #1 
Повернути таблицю зі списку імен клієнтів. Кожне значення в списку клієнтів стає значенням рядка, а кожен список стає стовпцем.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Створити таблицю з даного списку стовпців і списку імен стовпців.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Створити таблицю з різною кількістю стовпців для кожного рядка. Якщо значення в рядку бракує, указується Null-значення.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
