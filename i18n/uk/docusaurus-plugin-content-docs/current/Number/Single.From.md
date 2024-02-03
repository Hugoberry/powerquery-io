---
title: Single.From
---

# Single.From


## Description

Створює значення типу одинарної точності із заданого значення.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Повертає одиничне значення <code>number</code> із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Single.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code> та перебуває в діапазоні одиничної точності, повертається <code>value</code>. Інакше повертається помилка. Якщо параметр <code>value</code> має інший тип, його спочатку буде перетворено на значення <code>number</code> за допомогою функції <code>Number.FromText</code>. Крім того, можна вказати необов'язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати значення &lt;code&gt;number&lt;/code&gt; одинарної точності зі значення &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
