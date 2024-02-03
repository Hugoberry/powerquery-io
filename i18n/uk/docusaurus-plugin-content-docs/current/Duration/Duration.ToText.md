---
title: Duration.ToText
---

# Duration.ToText


## Description

Повертає текст форми &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Повертає текстове представлення заданого значення тривалості <code>duration</code> у формі "день.година:хвилина:секунда". <ul>        <li><code>duration</code>: значення <code>duration</code>, для якого повертається текстове представлення.</li>  <li><code>format</code>: <i>[Необов’язково]</i> Застарілий параметр, що повертатиме помилку, якщо не дорівнюватиме Null-значенню.</li>      </ul>


## Examples

### Example #1 
Перетворити &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; на текстове значення.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
