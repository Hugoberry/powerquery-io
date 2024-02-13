---
title: Binary.From
---

# Binary.From


Crea un binario a partir del valor dado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devuelve un valor <code>binary</code> a partir del <code>value</code> especificado. Si el <code>value</code> especificado es <code>null</code>, <code>Binary.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>binary</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir a un valor <code>binary</code>:      <ul>        <li><code>text</code>: un valor <code>binary</code> a partir de la representación de texto. Para más información, vea <code>Binary.FromText</code>.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Obtener el valor &lt;code&gt;binary&lt;/code&gt; de &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
