---
title: Logical.From
---

# Logical.From


## Description

Verilen değerden bir mantıksal değer oluşturur.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Verilen <code>value</code> değerinden bir <code>logical</code> değeri döndürür. Verilen <code>value</code> <code>null</code> olduğunda <code>Logical.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>logical</code> olduğunda <code>value</code> döndürülür. Aşağıdaki türlerde olan değerler bir <code>logical</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin değerindeki <code>"true"</code> veya <code>"false"</code> olan bir <code>logical</code> değeri. Ayrıntılar için bkz. <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>value</code> <code>0</code> ile eşitse <code>false</code>, aksi takdirde <code>true</code>.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;2&lt;/code&gt; değerini bir &lt;code&gt;logical&lt;/code&gt; değerine dönüştürür.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
