---
title: Number.FromText
---

# Number.FromText


## Description

Создает числа из стандартных текстовых форматов (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Возвращает значение <code>number</code> из заданного текстового значения <code>text</code>. <ul>  <li><code>text</code>: текстовое представление числового значения. Представление должно быть в обычном числовом формате, например: "15", "3,423.10" или "5.0E-10".</li>  <li><code>culture</code>: необязательное значение языка и региональных параметров, определяющее, как интерпретируется <code>text</code> (например, "ru-RU").</li> </ul>


## Examples

### Example #1 
Возвратить числовое значение &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Возвратить числовое значение &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
