---
title: Logical.From
---

# Logical.From


## Description

Создает логическое значение из заданного.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Возвращает значение <code>logical</code>, полученное из предоставленного значения <code>value</code>. Если данное <code>value</code> равно <code>NULL</code>, то <code>Logical.From</code> возвращает <code>NULL</code>. Если данное <code>value</code> представляет собой значение <code>logical</code>, то <code>value</code> и будет возвращено. Преобразовать в <code>logical</code> можно значения следующих типов:      <ul>        <li><code>text</code>. Значение <code>logical</code> берется из текстового значения <code>"true"</code> (истина) или <code>"false"</code> (ложь). Подробнее см. <code>Logical.FromText</code>.</li>        <li><code>number</code>. Значение будет <code>false</code>, если <code>value</code> равно <code>0</code>, в противном случае — <code>true</code>.</li>      </ul>Если <code>value</code> имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1 
Преобразовать &lt;code&gt;2&lt;/code&gt; в значение &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
