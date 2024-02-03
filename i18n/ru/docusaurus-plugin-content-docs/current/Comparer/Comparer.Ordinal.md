---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Возвращает функцию сравнения, использующую порядковые правила для сравнения значений.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Возвращает функцию сравнения, использующую порядковые правила для сравнения указанных значений <code>x</code> и <code>y</code>.<br />        <br />        Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.    


## Examples

### Example #1 
Используя порядковые правила, выяснить, эквивалентны ли значения &#34;encyclopædia&#34; и &#34;encyclopaedia&#34;. Обратите внимание, что они эквивалентны при использовании &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
