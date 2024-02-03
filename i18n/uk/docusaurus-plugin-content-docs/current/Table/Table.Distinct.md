---
title: Table.Distinct
---

# Table.Distinct


## Description

Видаляє повторювані рядки з таблиці.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

Видаляє повторювані рядки з таблиці.    За допомогою додаткового параметра <code>equationCriteria</code> вказуються стовпці таблиці, які перевіряються на дублювання. Якщо <code>equationCriteria</code> не задано, перевіряються всі стовпці.<br />    <br />    Power Query іноді розвантажує певні операції на серверні джерела даних (що також називається згортанням), а також оптимізує запити,     пропускаючи операції, які не є строго необхідними, тому загалом немає жодних запорук щодо певних повторів, що збережуться.    Наприклад, не слід припускати, що перший рядок з унікальним набором значень у стовпцях залишатиметься, а наведені нижче рядки в таблиці вилучаться.    Якщо потрібно, щоб видалення повторів мало передбачувану поведінку, спочатку буферизуйте таблицю за допомогою функції <code>Table.Buffer</code>.


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
Видалити повторювані рядки зі стовпця [b] у таблиці &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt;.
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
