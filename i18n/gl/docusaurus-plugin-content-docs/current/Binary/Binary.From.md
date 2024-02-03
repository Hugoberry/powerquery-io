---
title: Binary.From
---

# Binary.From


## Description

Crea un binario a partir do valor indicado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Devolve un valor <code>binary</code> a partir do <code>value</code> indicado. Se o valor <code>value</code> é <code>null</code>, <code>Binary.From</code> devolve <code>null</code>.  Se o valor <code>value</code> é <code>binary</code>, devólvese <code>value</code>. Pódense converter a un valor <code>binary</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: un valor <code>binary</code> a partir da representación de texto. Consulta <code>Binary.FromText</code> para obter máis información.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Obter o valor &lt;code&gt;binary&lt;/code&gt; de &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
