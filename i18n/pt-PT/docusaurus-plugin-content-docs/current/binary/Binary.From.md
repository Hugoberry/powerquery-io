---
title: Binary.From
---

# Binary.From


Cria um binário a partir do valor especificado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devolve um valor <code>binary</code> do fornecido <code>value</code>. Se o fornecido <code>value</code> for <code>null</code>, <code>Binary.From</code> devolve <code>null</code>.  Se o fornecido <code>value</code> for <code>binary</code>, <code>value</code>é devolvido. Valores dos seguintes tipos podem ser convertidos para um valor <code>binary</code>:      <ul>        <li><code>text</code>: Um valor <code>binary</code> da representação de texto.Consulte o <code>Binary.FromText</code> para detalhes.</li>      </ul>Se <code>value</code> for de algum outro tipo, é devolvido um erro.


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
