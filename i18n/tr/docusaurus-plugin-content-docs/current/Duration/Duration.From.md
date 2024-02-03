---
title: Duration.From
---

# Duration.From


## Description

Verilen değerden bir süre oluşturur.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Verilen <code>value</code> değerinden bir <code>duration</code> değeri döndürür. Verilen <code>value</code> <code>null</code> ise <code>Duration.From</code> <code>null</code> döndürür. Verilen <code>value</code> <code>duration</code> ise <code>value</code> döndürülür. Aşağıdaki türde olan değerler bir <code>duration</code> değerine dönüştürülebilir:      <ul>        <li><code>text</code>: Metin biçimindeki geçen zaman biçimlerinden bir <code>duration</code> değeri (g.s:d:s). Ayrıntılar için bkz. <code>Duration.FromText</code>.</li>        <li><code>number</code>: <code>value</code> ile ifade edilen tam ve kesirli günlerle eşdeğer bir <code>duration</code>.</li>      </ul><code>value</code> başka bir türde olduğunda hata döndürülür.


## Examples

### Example #1 
&lt;code&gt;2.525&lt;/code&gt; değerini bir &lt;code&gt;duration&lt;/code&gt; değerine dönüştürür.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
