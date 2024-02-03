---
title: Percentage.From
---

# Percentage.From


## Description

Повертає значення відсотка від заданого значення.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Повертає значення <code>percentage</code> із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Percentage.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>text</code> зі знаком відсотка в кінці, повертається перетворене десяткове число. Інакше значення буде перетворено на <code>number</code> за допомогою функції <code>Number.From</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати значення типу &lt;code&gt;percentage&lt;/code&gt; зі значення &lt;code&gt;&#34;12,3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
