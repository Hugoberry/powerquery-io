---
title: Time.From
---

# Time.From


## Description

Створює час із заданого значення.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Повертає значення <code>time</code> із заданого параметра <code>value</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Time.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>time</code>, повертається <code>value</code>. Значення таких типів можна перетворити на значення <code>time</code>:      <ul>        <li><code>text</code>: значення <code>time</code> із текстового представлення. Див. опис функції <code>Time.FromText</code>, щоб дізнатися більше.</li>        <li><code>datetime</code>: компонент часу параметра <code>value</code>.</li>        <li><code>datetimezone</code>: компонент часу еквівалента місцевих дати й часу параметра <code>value</code>.</li>        <li><code>number</code>: еквівалент <code>time</code> значення кількості неповних днів, вираженого значенням <code>value</code>. Якщо <code>value</code> має від’ємне значення або значення, не менше за 1, повертається помилка.</li>      </ul>Якщо параметр <code>value</code> має інше значення, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;0.7575&lt;/code&gt; на значення &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Перетворити &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; на значення &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
