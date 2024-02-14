---
title: Double.From
---

# Double.From


Создает число Double по заданному значению.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение <code>number</code> типа Double, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Double.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>number</code> в границах диапазона Double, то <code>value</code> и возвращается, а в противном случае возвращается ошибка. Если <code>value</code> имеет какой-либо другой тип, значение сначала преобразуется в <code>number</code> с помощью <code>Number.FromText</code>. При необходимости можно также указать <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получить значение Double &lt;code&gt;number&lt;/code&gt; для &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
