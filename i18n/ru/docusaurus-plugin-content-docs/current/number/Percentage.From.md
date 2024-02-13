---
title: Percentage.From
---

# Percentage.From


Возвращает значение процента от заданного значения.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Возвращает значение <code>percentage</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Percentage.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой <code>text</code> с конечным символом процентов, то возвращается преобразованное десятичное значение. В противном случае значение преобразуется в <code>number</code> с помощью <code>Number.From</code>. При необходимости можно также указать <code>culture</code> (например, "ru-RU").


## Examples

### Example #1 
Получапет значение &lt;code&gt;percentage&lt;/code&gt; для &lt;code&gt;&#34;12.3 %&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
