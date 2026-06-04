---
title: Table.Distinct
---

# Table.Distinct


Видаляє повторювані рядки з таблиці.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Видаляє повторювані рядки з таблиці. За допомогою додаткового параметра `equationCriteria` вказуються стовпці таблиці, які перевіряються на дублювання. Якщо `equationCriteria` не задано, перевіряються всі стовпці.  
  
Power Query іноді розвантажує певні операції на серверні джерела даних (що також називається згортанням), а також оптимізує запити, пропускаючи операції, які не є строго необхідними, тому загалом немає жодних запорук щодо певних повторів, що збережуться. Наприклад, не слід припускати, що перший рядок з унікальним набором значень у стовпцях залишатиметься, а наведені нижче рядки в таблиці вилучаться. Якщо потрібно, щоб видалення повторів мало передбачувану поведінку, спочатку буферизуйте таблицю за допомогою функції `Table.Buffer`.


## Examples

### Example #1
Видалити повтори рядків із таблиці.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Видалити повторювані рядки зі стовпця \[b\] у таблиці `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
