---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Додає новий стовпець із типовими значеннями, отриманими за допомогою нечітких значень групування у вказаному стовпці таблиці.


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

Додає новий стовпець `newColumnName` до `table` із репрезентативними значеннями `columnName`. Репрезентативні значення отримуються за допомогою значень розмитої відповідності в `columnName` для кожного рядка.

Можна включити додатковий набір параметрів `options`, щоб указати, як порівнювати стовпці ключа. До параметрів належать:

-   `Culture` : Дає змогу згрупувати записи на основі правил культури. Це може бути будь-яке припустиме ім’я культури. Наприклад, параметр Culture зі значенням ja-JP групує записи на основі японської культури. Стандартне значення – "", яке згруповано на основі еталонної англійської культури.
-   `IgnoreCase` : Логічне значення (true/false), яке дає змогу групувати ключі без урахування регістра. Наприклад, якщо встановлено значення true, рядок "Виноград" буде згруповано з рядком "виноград". Стандартне значення – true.
-   `IgnoreSpace` : Логічне значення (true/false), яке дає змогу об’єднувати частини тексту, щоб знайти групи. Наприклад, якщо встановлено значення true, рядок "Вино град" буде згруповано з рядком "Виноград". Стандартне значення – true.
-   `SimilarityColumnName` : Ім’я стовпця, який показує схожість між вхідним і репрезентативним значенням введених даних. Стандартне значення – NULL. Якщо використовується це значення, новий стовпець для схожих значень не буде додано.
-   `Threshold` : Число від 0,00 до 1,00 визначає оцінку подібності, на основі якої групуватимуться два значення. Наприклад, "Виноград" і "Винорад" (без "г") буде згруповано, лише якщо значення цього параметра менше 0,90. З граничним значенням 1,00 дозволяються лише точні збіги. (Зверніть увагу, що в розмитому "точному збігу" можуть ігноруватися такі відмінності, як регістр, порядок слів і знаки пунктуації.) Стандартне значення – 0,80.
-   `TransformationTable` : Таблиця, яка дає змогу групувати записи на основі зіставлення настроюваних значень. Вона має містити стовпці "Звідки" та "Куди". Наприклад, рядок "Виноград" буде згруповано з рядком "Родзинки", якщо є таблиця трансформації, де стовпець "Звідки" містить значення "Виноград", а стовпець "Куди" – значення "Родзинки". Зверніть увагу, що трансформацію буде застосовано до всього тексту в таблиці трансформації. У наведеній вище таблиці трансформації рядок "Виноград солодкий" буде також згруповано з рядком "Родзинки солодкі".


## Examples

### Example #1
Знайти типові значення розташування працівників.
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
