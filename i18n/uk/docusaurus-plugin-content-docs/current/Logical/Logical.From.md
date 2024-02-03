---
title: Logical.From
---

# Logical.From


## Description

Створює логічне значення із заданого.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Повертає значення <code>logical</code> із заданого значення <code>value</code>. Якщо задане значення <code>value</code> – <code>null</code>, <code>Logical.From</code> повертає значення <code>null</code>.  Якщо задане значення <code>value</code> – <code>logical</code>, повертається значення <code>value</code>. На значення <code>logical</code> можуть перетворюватися значення вказаних нижче типів.      <ul>                <li><code>text</code>: значення <code>logical</code> із текстового значення, <code>"true"</code> або <code>"false"</code>. Докладніші відомості див. в <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> – якщо <code>value</code> дорівнює <code>0</code>, <code>true</code> – в іншому випадку.</li>      </ul>Якщо <code>value</code> належить до будь-якого іншого типу, повертається помилка.


## Examples

### Example #1 
Перетворити &lt;code&gt;2&lt;/code&gt; на значення &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
