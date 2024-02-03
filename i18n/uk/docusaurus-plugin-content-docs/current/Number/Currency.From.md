---
title: Currency.From
---

# Currency.From


## Description

Повертає значення грошової одиниці із заданого значення.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Повертає значення <code>currency</code> із заданого параметра <code>value</code>. Якщо заданий параметр <code>value</code> має <code>null</code>-значення, функція <code>Currency.From</code> повертає <code>null</code>. Якщо заданий параметр <code>value</code> має значення <code>number</code> та перебуває в діапазоні грошової одиниці, дробова частина параметра <code>value</code> повертається округленою до 4 десяткових знаків. Якщо заданий параметр <code>value</code> має інше значення, за допомогою функції <code>Number.FromText</code>, його буде перетворено на значення типу <code>number</code>. Припустимий діапазон значень грошової одиниці: від <code>-922 337 203 685 477,5808</code> до <code>922 337 203 685 477,5807</code>. Див. опис функції <code>Number.Round</code>, щоб дізнатися про доступні режими округлення. За замовчуванням використовується режим <code>RoundingMode.ToEven</code>. Крім того, можна вказати необов’язковий параметр <code>culture</code> (наприклад, "uk-UA").


## Examples

### Example #1 
Отримати значення &lt;code&gt;currency&lt;/code&gt; з &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Отримання значення типу &lt;code&gt;currency&lt;/code&gt; з числа &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; за допомогою режиму &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
