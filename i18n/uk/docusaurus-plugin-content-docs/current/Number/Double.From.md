---
title: Double.From
---

# Double.From


## Description

Створює число подвійної точності із заданого значення.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Повертає значення <code>number</code> подвійної точності із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Double.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code> та перебуває в діапазоні подвійної точності, повертається <code>value</code>. Інакше повертається помилка. Якщо параметр <code>value</code> має інший тип, його спочатку буде перетворено на значення <code>number</code> за допомогою функції <code>Number.FromText</code>. Крім того, можна вказати необов'язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати значення &lt;code&gt;number&lt;/code&gt; подвійної точності зі значення &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
