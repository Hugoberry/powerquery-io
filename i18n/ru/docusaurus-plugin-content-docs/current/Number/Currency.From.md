---
title: Currency.From
---

# Currency.From


## Description

Возвращает значение валюты для заданного значения.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Возвращает значение <code>currency</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Currency.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>number</code> в пределах диапазона currency, то возвращается <code>value</code> с округлением до четвертого знака дробной части. Если <code>value</code> имеет какой-либо другой тип, то значение сначала преобразуется в <code>number</code> с помощью <code>Number.FromText</code>. Допустимый диапазон для currency: от <code>-922,337,203,685,477.5808</code> до <code>922,337,203,685,477.5807</code>. Доступные режимы округления см. в описании <code>Number.Round</code>. По умолчанию используется <code>RoundingMode.ToEven</code>. При необходимости можно также указать <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получить значение &lt;code&gt;валюты&lt;/code&gt; из значения &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Получим значение &lt;code&gt;currency&lt;/code&gt; для &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt;, используя &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
