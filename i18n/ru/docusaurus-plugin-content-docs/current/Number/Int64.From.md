---
title: Int64.From
---

# Int64.From


Создает 64-разрядное целое значение из данного значения.


## Syntax

```powerquery
Int64.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Возвращает 64-разрядное целочисленное значение <code>number</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Int64.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>number</code> в диапазоне 64-разрядных целых чисел и не имеет дробной части, то <code>value</code> и возвращается. При наличии дробной части число округляется в соответствии с указанным режимом. Режим округления по умолчанию — <code>RoundingMode.ToEven</code>. Если <code>value</code> имеет какой-либо другой тип, сначала выполняется преобразование в <code>number</code> с помощью <code>Number.FromText</code>. Доступные режимы округления см. в описании <code>Number.Round</code>. При необходимости можно также указать <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получить 64-разрядное целое значение &lt;code&gt;number&lt;/code&gt; &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Получим 64-разрядное целочисленное значение &lt;code&gt;number&lt;/code&gt; для &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;, используя &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int64.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
