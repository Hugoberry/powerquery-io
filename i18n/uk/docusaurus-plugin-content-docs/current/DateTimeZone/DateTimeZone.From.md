---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Створює із заданого значення дату й час із часовим поясом.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Повертає значення <code>datetimezone</code> із заданого параметра <code>value</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").Якщо параметр <code>value</code> має <code>Null</code>-значення, <code>DateTimeZone.From</code> повертає <code>Null</code>-значення. Якщо параметр <code>value</code> має значення <code>datetimezone</code>, повертається <code>value</code>. Значення таких типів можна перетворити на значення <code>datetimezone</code>:      <ul>        <li><code>text</code> – значення <code>datetimezone</code> із текстового представлення. Щоб дізнатися більше, див. опис функції <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code> – значення <code>datetimezone</code>, де <code>value</code> – компонент дати, <code>12:00:00 AM</code> – компонент часу, а зміщення відповідає місцевому часовому поясу.</li>        <li><code>datetime</code> – значення <code>datetimezone</code>, де <code>value</code> – дата й час, а зміщення відповідає місцевому часовому поясу.</li>        <li><code>time</code> – значення <code>datetimezone</code>, де еквівалент дати автоматизації OLE <code>0</code> – компонент дати, <code>value</code> – компонент часу, а зміщення відповідає місцевому часовому поясу.</li>        <li><code>number</code> – значення <code>datetimezone</code>, де еквівалент дати й часу автоматизації OLE виражено <code>value</code>, а зміщення відповідає місцевому часовому поясу.</li>      </ul>Якщо параметр <code>value</code> має інше значення, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; на значення &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
