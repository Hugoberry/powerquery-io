---
title: Int32.From
---

# Int32.From


## Description

Crea un número enteiro de 32 bits a partir do valor facilitado.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Devolve un valor <code>number</code> enteiro de 32 bits a partir do <code>value</code> indicado. Se o <code>value</code> indicado é <code>null</code>, <code>Int32.From</code> devolve <code>null</code>. Se o <code>value</code> indicado é un <code>number</code> dentro do intervalo dun enteiro de 32 bits sen unha parte fraccionaria, <code>value</code> devólvese. Se ten parte fraccionaria, entón o número arredondarase co modo de redondeo especificado. O modo de redondeo predeterminado é <code>RoundingMode.ToEven</code>. Se <code>value</code> é doutro tipo, primeiro converterase nun <code>number</code> usando <code>Number.FromText</code>. Consulta <code>Number.Round</code> para coñecer os modos de redondeo dispoñibles. Tamén se pode fornecer un <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Obteña o valor &lt;code&gt;number&lt;/code&gt; enteiro de 32 bits de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obteña o valor &lt;code&gt;number&lt;/code&gt; enteiro de 32 bits de &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; mediante &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
