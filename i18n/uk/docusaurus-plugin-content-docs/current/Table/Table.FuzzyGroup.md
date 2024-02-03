---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Групує рядки таблиці на основі розмитої відповідності ключів.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Details

Згруповує рядки <code>table</code> за значенням розмитої відповідності у вказаному стовпці <code>key</code> для кожного рядка.    Для кожної групи створюється запис, який містить стовпці ключа (і їхні значення), а також будь-які сукупні стовпці, визначені параметром <code>aggregatedColumns</code>.    Ця функція не гарантує повернення рядків у фіксованому порядку.    Можна включити додатковий набір параметрів<code>options</code>, щоб указати, як порівнювати стовпці ключа. До параметрів належать:     <ul><li><code>Culture</code> : Дає змогу згрупувати записи на основі правил культури. Це може бути будь-яке припустиме ім’я культури. Наприклад, параметр Culture зі значенням ja-JP групує записи на основі японської культури. Стандартне значення&#160;– &quot;&quot;, яке згруповано на основі еталонної англійської культури.</li><li><code>IgnoreCase</code> : Логічне значення (true/false), яке дає змогу групувати ключі без урахування регістра. Наприклад, якщо встановлено значення true, рядок &quot;Виноград&quot; буде згруповано з рядком &quot;виноград&quot;. Стандартне значення – true.</li><li><code>IgnoreSpace</code> : Логічне значення (true/false), яке дає змогу об’єднувати частини тексту, щоб знайти групи. Наприклад, якщо встановлено значення true, рядок &quot;Вино град&quot; буде згруповано з рядком &quot;Виноград&quot;. Стандартне значення – true.</li><li><code>SimilarityColumnName</code> : Ім’я стовпця, який показує схожість між вхідним і репрезентативним значенням введених даних. Стандартне значення – NULL. Якщо використовується це значення, новий стовпець для схожих значень не буде додано.</li><li><code>Threshold</code> : Число від 0,00 до 1,00 визначає оцінку подібності, на основі якої групуватимуться два значення.    Наприклад, &quot;Виноград&quot; і &quot;Винорад&quot; (без &quot;г&quot;) буде згруповано, лише якщо значення цього параметра менше 0,90.    З граничним значенням 1,00 дозволяються лише точні збіги.    (Зверніть увагу, що в розмитому &quot;точному збігу&quot; можуть ігноруватися такі відмінності, як регістр, порядок слів і знаки пунктуації.)    Стандартне значення&#160;– 0,80.</li><li><code>TransformationTable</code> : Таблиця, яка дає змогу групувати записи на основі зіставлення настроюваних значень. Вона має містити стовпці &quot;Звідки&quot; та &quot;Куди&quot;. Наприклад, рядок &quot;Виноград&quot; буде згруповано з рядком &quot;Родзинки&quot;, якщо є таблиця трансформації, де стовпець &quot;Звідки&quot; містить значення &quot;Виноград&quot;, а стовпець &quot;Куди&quot; – значення &quot;Родзинки&quot;. Зверніть увагу, що трансформацію буде застосовано до всього тексту в таблиці трансформації. У наведеній вище таблиці трансформації рядок &quot;Виноград солодкий&quot; буде також згруповано з рядком &quot;Родзинки солодкі&quot;.</li></ul><br />    


## Examples

### Example #1 
Групування таблиці, що додає стовпець статистики [Count], який містить кількість працівників у кожному розташуванні (&#34;each Table.RowCount(_))&#34;).
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
