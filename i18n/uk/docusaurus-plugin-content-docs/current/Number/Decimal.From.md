---
title: Decimal.From
---

# Decimal.From


## Description

Створює десяткове число із заданого значення.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Повертає значення <code>number</code> десяткової точності із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має значення <code>null</code>, функція <code>Decimal.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code> та перебуває в діапазоні десяткової точності, повертається <code>value</code>. Інакше повертається помилка. Якщо параметр <code>value</code> має інший тип, його спочатку буде перетворено на значення <code>number</code> за допомогою функції <code>Number.FromText</code>. Крім того, можна вказати необов'язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати десяткове значення &lt;code&gt;number&lt;/code&gt; зі значення &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
