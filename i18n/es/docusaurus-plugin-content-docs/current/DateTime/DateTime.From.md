---
title: DateTime.From
---

# DateTime.From


Crea un datetime a partir del valor dado.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Devuelve un valor <code>datetime</code> del <code>value</code>especificado. También se puede proporcionar un <code>culture</code> opcional (por ejemplo, "en-US").Si el <code>value</code> especificado es <code>null</code>, <code>DateTime.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>datetime</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir en un valor <code>datetime</code>: <ul> <li><code>text</code>: un valor <code>datetime</code> de la representación textual. Consulte <code>DateTime.FromText</code> para obtener más información.</li>        <li><code>date</code>: un <code>datetime</code> con <code>value</code> como componente de fecha y <code>12:00:00 AM</code> como componente de hora.</li> <li><code>datetimezone </code>: el <code>datetime</code> equivalente local de <code>value</code>.</li> <li><code>time</code>: Un <code>datetime</code> con la fecha equivalente a la fecha de automatización OLE de <code>0</code> como componente de fecha y <code>value</code> como componente de hora.</li>        <li><code>number</code>: un <code>datetime</code> equivalente de la fecha de automatización OLE expresada por <code>value</code>. </li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; en un valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Convertir &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; en un valor &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
