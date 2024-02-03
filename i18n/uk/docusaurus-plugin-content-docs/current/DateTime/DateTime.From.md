---
title: DateTime.From
---

# DateTime.From


## Description

Створює дату й час із заданого значення.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Повертає значення <code>datetime</code> із заданого параметра <code>value</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>DateTime.From</code> повертає <code>null</code>. Якщо заданий  параметр <code>value</code> має значення <code>datetime</code>, повертається <code>value</code>. Значення таких типів можна перетворити на значення <code>datetime</code>:      <ul>        <li><code>text</code>: значення <code>datetime</code> із текстового представлення. Див. опис функції <code>DateTime.FromText</code>, щоб дізнатися більше.</li>        <li><code>date</code>: значення <code>datetime</code> з <code>value</code> як компонентом дати й<code>12:00:00 AM</code> як компонентом часу.</li>        <li><code>datetimezone</code>: місцевий еквівалент значення <code>datetime</code> параметра <code>value</code>.</li>        <li><code>time</code>: значення <code>datetime</code> з еквівалентом дати автоматизації OLE <code>0</code> як компонентом дати й <code>value</code> як компонентом часу.</li>        <li><code>number</code>: еквівалент значення <code>datetime</code> дати автоматизації OLE, виражений параметром <code>value</code>. </li>      </ul>Якщо параметр <code>value</code> має інше значення, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; на значення &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Перетворити &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; на значення &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
