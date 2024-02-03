---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Возвращает функцию сравнения без учета регистра, использующую при сравнении значений правила Ordinal.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Возвращает функцию сравнения без учета регистра, использующую порядковые правила для сравнения указанных значений <code>x</code> и <code>y</code>.<br />        <br />        Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.    


## Examples

### Example #1 
Используя правила Ordinal без учета регистра, сравним &#34;Abc&#34; с &#34;abc&#34;. Обратите внимание, что &#34;Abc&#34; считается меньше &#34;abc&#34;, если использовать &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
