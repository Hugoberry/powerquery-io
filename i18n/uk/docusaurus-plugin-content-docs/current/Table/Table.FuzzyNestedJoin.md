---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Виконує розмите об’єднання зазначених стовпців між таблицями та створює результат об’єднання в новому стовпці.


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


## Details

Об’єднує рядки таблиць "<code>table1</code>" і "<code>table2</code>" на основі розмитої відповідності значень стовпців ключів, вибраних за ключем "<code>key1</code>" (для таблиці "<code>table1</code>") і "<code>key2</code>" (для "<code>table2</code>"). Результати повертаються в новому стовпці з іменем "<code>newColumnName</code>".<br />Розмита відповідність – це порівняння на основі подібності, а не тотожності тексту.<br />Додатковий параметр <code>joinKind</code> указує вид з’єднання, яке слід виконати. Якщо значення параметра <code>joinKind</code> не вказано, за замовчуванням виконується ліве зовнішнє з’єднання. Доступні такі варіанти:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Можна включити додатковий набір параметрів <code>joinOptions</code>, щоб указати, як порівнювати стовпці ключів. Доступні такі варіанти:    <ul><li><code>ConcurrentRequests</code> : Число від 1 до 8, яке визначає кількість паралельних потоків, які потрібно використовувати для розмитої відповідності. Стандартне значення – 1.</li><li><code>Culture</code> : Дає змогу зіставити записи на основі правил культури. Це може бути будь-яке припустиме ім’я культури. Наприклад, параметр Culture зі значенням ja-JP зіставляє записи на основі японської культури. Стандартне значення&#160;– &quot;&quot;, яке згруповано на основі еталонної англійської культури.</li><li><code>IgnoreCase</code> : Логічне значення (true/false), яке дає змогу зіставити ключі без урахування регістра. Наприклад, якщо встановлено значення true, рядок &quot;Виноград&quot; буде зіставлено з рядком &quot;виноград&quot;. Стандартне значення – true.</li><li><code>IgnoreSpace</code> : Логічне значення (true/false), яке дає змогу об’єднувати частини тексту, щоб знайти збіги. Наприклад, якщо встановлено значення true, рядок &quot;Вино град&quot; буде зіставлено з рядком &quot;Виноград&quot;. Стандартне значення&#160;– true.</li><li><code>NumberOfMatches</code> : Ціле число, яке означає максимальну кількість збігів, які можна повернути для кожного вхідного рядка. Наприклад, якщо вказано значення 1, повернеться щонайбільше один збіг для кожного вхідного рядка. Якщо цей параметр не вказано, повертатимуться всі збіги.</li><li><code>SimilarityColumnName</code> : Ім’я стовпця, який показує схожість між вхідним і репрезентативним значенням введених даних. Стандартне значення – NULL. Якщо використовується це значення, новий стовпець для схожих значень не буде додано.</li><li><code>Threshold</code> : Число від 0,00 до 1,00 визначає оцінку подібності, на основі якої зіставлятимуться два значення.    Наприклад, &quot;Виноград&quot; і &quot;Винорад&quot; (без &quot;г&quot;) буде зіставлено, лише якщо значення цього параметра менше 0,90.    З граничним значенням 1,00 дозволяються лише точні збіги.    (Зверніть увагу, що в розмитому &quot;точному збігу&quot; можуть ігноруватися такі відмінності, як регістр, порядок слів і знаки пунктуації.)    Стандартне значення&#160;– 0,80.</li><li><code>TransformationTable</code> : Таблиця, яка дає змогу зіставити записи на основі зіставлення настроюваних значень. Вона має містити стовпці &quot;Звідки&quot; та &quot;Куди&quot;. Наприклад, рядок &quot;Виноград&quot; буде зіставлено з рядком &quot;Родзинки&quot;, якщо є таблиця трансформації, де стовпець &quot;Звідки&quot; містить значення &quot;Виноград&quot;, а стовпець &quot;Куди&quot; – значення &quot;Родзинки&quot;. Зверніть увагу, що трансформацію буде застосовано до всього тексту в таблиці трансформації. У наведеній вище таблиці трансформації рядок &quot;Виноград солодкий&quot; буде також зіставлено з рядком &quot;Родзинки солодкі&quot;.</li></ul><br />


## Examples

### Example #1 
Ліве внутрішнє розмите об’єднання на основі [FirstName]
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
