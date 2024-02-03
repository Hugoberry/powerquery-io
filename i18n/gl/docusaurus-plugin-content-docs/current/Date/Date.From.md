---
title: Date.From
---

# Date.From


## Description

Crea una data a partir do valor indicado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Devolve un valor <code>date</code> a partir do <code>value</code> indicado. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").Se o valor <code>value</code> indicado é <code>null</code>, <code>Date.From</code> devolve <code>null</code>. Se o valor <code>value</code> indicado é <code>date</code>, devólvese <code>value</code>. Pódense converter a un valor <code>date</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: valor <code>date</code> a partir da representación textual. Consulte <code>Date.FromText</code> para obter máis información.</li>        <li><code>datetime</code>: compoñente de data de <code>value</code>.</li>        <li><code>datetimezone</code>: compoñente de data da data e hora locais equivalente de <code>value</code>.</li>        <li><code>number</code>: compoñente de data da data e hora equivalente da data de OLE Automation expresado por <code>value</code>.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;43910&lt;/code&gt; nun valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Converter &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; nun valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
