---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Об&#39;єднує вказані стовпці в новий стовпець із значенням запису, де кожен запис містить імена та значення полів, що відповідають іменам і значенням об’єднаних стовпців.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

Об’єднує вказані стовпці "<code>table</code>" у новий стовпець зі значеннями-записами та з іменем "<code>newColumnName</code>". Кожний запис містить імена полів і значення, що відповідають іменам стовпців і значенням об’єднаних стовпців. Якщо для "<code>options</code>" указано запис, можна вказати такі параметри:    <ul>     <li> <code>DisplayNameColumn</code> – у текстовому вигляді означає, що ім’я стовпця має слугувати відображуваним іменем запису. Цей параметр не має відповідати стовпцю в записі;</li>     <li> <code>TypeName</code> – у текстовому вигляді означає, що це ім’я логічного типу для отриманого запису, що можна використовувати під час завантаження даних, щоб керувати поведінкою в середовищі завантаження. </li>    </ul>    



## Category
Table.Transformation
