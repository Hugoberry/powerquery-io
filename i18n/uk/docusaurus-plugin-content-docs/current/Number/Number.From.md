---
title: Number.From
---

# Number.From


## Description

Створює число від заданого значення.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Повертає значення <code>number</code> із заданого параметра <code>value</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Number.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code>, повертається <code>value</code>. Значення таких типів можна перетворити на значення <code>number</code>:      <ul>        <li><code>text</code>: значення <code>number</code> з текстового представлення. Обробляються типові текстові формати ("15", "3423,10", "5,0E-10"). Див. опис функції <code>Number.FromText</code>, щоб дізнатися більше.</li>        <li><code>logical</code>: 1 – <code>true</code>, 0 – <code>false</code>.</li>        <li><code>datetime</code>: число подвійної точності з рухомою комою, що містить еквівалент дати автоматизації OLE.</li>        <li><code>datetimezone</code>: число подвійної точності з рухомою комою, яке містить еквівалент дати автоматизації OLE місцевих дати й часу параметра <code>value</code>.</li>        <li><code>date</code>: число подвійної точності з рухомою комою, що містить еквівалент дати автоматизації OLE.</li>        <li><code>time</code>: виражається в неповних днях.</li>        <li><code>duration</code>: виражається в повних і неповних днях.</li>      </ul>Якщо параметр <code>value</code> має інше значення, повертається помилка.


## Examples

### Example #1 
Отримати &lt;code&gt;number&lt;/code&gt; значення &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Отримати &lt;code&gt;number&lt;/code&gt; значення &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Отримати значення типу &lt;code&gt;number&lt;/code&gt; зі значення &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
