---
title: Binary.From
---

# Binary.From


## Description

Cria um binário a partir do valor especificado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Retorna um valor <code>binary</code> com base no <code>value</code> especificado. Se o <code>value</code> especificado for <code>null</code>, <code>Binary.From</code> retornará <code>null</code>. Se o <code>value</code> especificado for <code>binary</code>, <code>value</code> será retornado. Os valores dos tipos a seguir podem ser convertidos em um valor <code>binary</code>:      <ul>        <li><code>text</code>: um valor <code>binary</code> da representação de texto. Confira <code>Binary.FromText</code> para obter detalhes.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Obtenha o valor &lt;code&gt;binary&lt;/code&gt; de &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
