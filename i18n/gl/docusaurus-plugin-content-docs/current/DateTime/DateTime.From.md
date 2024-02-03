---
title: DateTime.From
---

# DateTime.From


## Description

Crea unha data e hora a partir do valor indicado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Devolve un valor <code>datetime</code> a partir do <code>value</code> indicado. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").Se o valor <code>value</code> indicado é <code>null</code>, <code>DateTime.From</code> devolve <code>null</code>. Se o valor <code>value</code> é <code>datetime</code>, devólvese <code>value</code>. Pódense converter a un valor <code>datetime</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: un valor <code>datetime</code> a partir da representación textual. Consulte <code>DateTime.FromText</code> para obter máis información.</li>        <li><code>date</code>: un valor <code>datetime</code> con <code>value</code> como o compoñente de data e <code>12:00:00 AM</code> como o compoñente de hora.</li>        <li><code>datetimezone</code>: o valor <code>datetime</code> local equivalente de <code>value</code>.</li>        <li><code>time</code>: un valor <code>datetime</code> coa data equivalente da data de OLE Automation de <code>0</code> como o compoñente de data e <code>value</code> como o compoñente de hora.</li>        <li><code>number</code>: un valor <code>datetime</code> equivalente á data de OLE Automation expresado por <code>value</code>. </li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; nun valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Converter &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; nun valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
