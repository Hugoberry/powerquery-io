---
title: Date.From
---

# Date.From


## Description

Створює дату із заданого значення.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Повертає значення <code>date</code>на основі заданого параметра <code>value</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Date.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>date</code>, повертається <code>value</code>. Значення таких типів можна перетворити на значення <code>date</code>:      <ul>        <li><code>text</code>: значення <code>date</code> із текстового представлення. Див. опис функції <code>Date.FromText</code>, щоб дізнатися більше.</li>        <li><code>datetime</code>: компонент дати <code>value</code>.</li>        <li><code>datetimezone</code>: компонент дати еквівалента місцевих дати й часу параметра <code>value</code>.</li>        <li><code>number</code>: компонент дати еквівалента дати й часу автоматизації OLE, виражений параметром <code>value</code>.</li>      </ul>Якщо параметр <code>value</code> має інше значення, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;43910&lt;/code&gt; на значення &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Перетворити &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; на значення &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
