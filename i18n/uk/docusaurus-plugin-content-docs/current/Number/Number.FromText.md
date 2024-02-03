---
title: Number.FromText
---

# Number.FromText


## Description

Створює числа з поширених текстових форматів (&#34;15&#34;, &#34;3 423,10&#34;, &#34;5,0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Повертає <code>число</code> із заданого текстового значення параметра <code>text</code>. <ul>  <li><code>text</code>: текстове представлення числового значення. Представлення має бути в типовому числовому форматі: "15", "3 423,10", "5.0E-10".</li>  <li><code>culture</code>: необов‘язкова культура, що контролює, як інтерпретується параметр <code>text</code> (наприклад, "uk-UA").</li> </ul>


## Examples

### Example #1 
Отримати числове значення від &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Отримати числове значення від &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
