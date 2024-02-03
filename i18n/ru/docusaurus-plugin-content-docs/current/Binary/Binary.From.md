---
title: Binary.From
---

# Binary.From


## Description

Создает двоичное значение из заданного значения


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Возвращает значение <code>binary</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Binary.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой значение <code>binary</code>, то <code>value</code> и возвращается. Преобразовать в <code>binary</code> можно значения следующих типов:      <ul>        <li><code>text</code>. Значение <code>binary</code> берется из текстового представления. Подробнее см. <code>Binary.FromText</code>.</li>      </ul>Если <code>value</code> имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1 
Получить значение &lt;code&gt;binary&lt;/code&gt; для &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
