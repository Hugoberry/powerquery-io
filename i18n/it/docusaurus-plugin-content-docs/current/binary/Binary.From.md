---
title: Binary.From
---

# Binary.From


Crea un binario dal valore specificato


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Restituisce un valore <code>binario</code> dal dato <code>value</code>. Se il dato <code>value</code> è <code>null</code>, <code>Binary.From</code> restituisce <code>null</code>.  Se il dato <code>value</code> è <code>binario</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>binario</code>:      <ul>        <li><code>testo</code>: Un valore <code>binario</code> dalla rappresentazione di testo. Per ulteriori informazioni, fare riferimento a <code>Binary.FromText</code>.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore. 


## Examples

### Example #1 
Ottenere il valore &lt;code&gt;binary&lt;/code&gt; di &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
