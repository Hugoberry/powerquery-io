---
title: Byte.From
---

# Byte.From


## Description

Створює 8-розрядне ціле число з указаного значення.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Повертає 8-розрядне ціле значення <code>number</code> із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Byte.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code> та перебуває в діапазоні 8-розрядних цілих чисел без дробової частки, повертається <code>value</code>. Якщо наявна дробова частка, число округлюється за вказаним режимом. За замовчуванням використовується режим округлення <code>RoundingMode.ToEven</code>. Якщо <code>value</code> має будь-який інший тип, його спочатку буде перетворено на <code>number</code> за допомогою функції <code>Number.FromText</code>. Див. опис функції <code>Number.Round</code>, щоб дізнатися про доступні режими округлення. Крім того, можна вказати необов'язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати 8-розрядне ціле значення &lt;code&gt;number&lt;/code&gt; зі значення &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Отримати 8-розрядне ціле значення &lt;code&gt;number&lt;/code&gt; зі значення &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;, використовуючи режим округлення &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
