---
title: Binary.From
---

# Binary.From


## Description

Створює двійкове значення із заданого значення.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Повертає значення <code>binary</code> із заданого <code>value</code>. Якщо задане значення <code>value</code> – <code>null</code>, <code>Binary.From</code> повертає значення <code>null</code>.  Якщо задане значення <code>value</code> – <code>binary</code>, повертається значення <code>value</code>. На значення <code>binary</code> можуть перетворюватися значення вказаних нижче типів.      <ul>        <li><code>text</code>: значення <code>binary</code> з текстової форми. Докладніші відомості див. в <code>Binary.FromText</code>.</li>      </ul>Якщо <code>value</code> належить до будь-якого іншого типу, повертається помилка.


## Examples

### Example #1 
Отримати &lt;code&gt;binary&lt;/code&gt; значення &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
