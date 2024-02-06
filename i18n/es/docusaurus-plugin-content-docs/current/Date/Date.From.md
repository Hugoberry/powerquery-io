---
title: Date.From
---

# Date.From


Crea una fecha a partir del valor dado.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Devuelve un valor <code>date</code> del <code>value</code>especificado. También se puede proporcionar un <code>culture</code> opcional (por ejemplo, "en-US").Si el <code>value</code> especificado es <code>null</code>, <code>Date.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>date</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir en un valor <code>date</code>: <ul> <li><code>text</code>: un valor <code>date</code> de la representación textual. Consulte <code>Date.FromText</code> para obtener más información.</li> <li><code>datetime</code>: el componente de fecha del <code>value</code>.</li> <li><code>datetimezone</code>:  Componente de fecha del equivalente de fecha y hora local de <code>value</code>.</li> <li><code>number</code>: el componente de fecha del equivalente datetime de la fecha de automatización OLE expresada por <code>value</code>.</li> </ul>Si <code>value</code> es de cualquier otro tipo,  se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;43910&lt;/code&gt; en un valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Convertir &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
