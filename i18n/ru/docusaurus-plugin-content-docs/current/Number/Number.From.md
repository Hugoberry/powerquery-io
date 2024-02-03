---
title: Number.From
---

# Number.From


## Description

Создает число из заданного значения.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Возвращает значение <code>number</code>, полученное из предоставленного значения <code>value</code>. При необходимости можно также указать <code>culture</code> (например, "ru-RU").Если данное <code>value</code> равно <code>NULL</code>, то <code>Number.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>number</code>, то <code>value</code> и возвращается. Преобразовать в <code>number</code> можно значения следующих типов:      <ul>        <li><code>text</code>. Значение <code>number</code> берется из текстового представления. Поддерживаются стандартные текстовые форматы ("15", "3,423.10", "5.0E-10"). Подробнее см. <code>Number.FromText</code>.</li>        <li><code>logical</code>. Значение равно 1 для <code>true</code> (истина) или 0 для <code>false</code> (ложь).</li>        <li><code>datetime</code>. Будет получено число двойной точности с плавающей запятой, содержащее эквивалент даты OLE Automation.</li>        <li><code>datetimezone</code>. Будет получено число двойной точности с плавающей запятой, содержащее дату OLE Automation, эквивалентную дате и местному времени из значения <code>value</code>.</li>        <li><code>date</code>. Будет получено число двойной точности с плавающей запятой, содержащее эквивалент даты OLE Automation.</li>        <li><code>time</code>. Выражение числа дней в дробной форме.</li>        <li><code>duration</code>. Выражение числа дней в целой и дробной форме.</li>      </ul>Если <code>value</code> имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1 
Получить значение &lt;code&gt;number&lt;/code&gt; для &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Получить значение &lt;code&gt;number&lt;/code&gt; для &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Получает значение &lt;code&gt;number&lt;/code&gt; для &lt;code&gt;&#34;12.3 %&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
