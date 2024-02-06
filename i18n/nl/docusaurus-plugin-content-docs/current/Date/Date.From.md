---
title: Date.From
---

# Date.From


Maakt een datum van de opgegeven waarde.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Hiermee wordt een <code>date</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>Date.From</code> <code>null</code> geretourneerd. Als de opgegeven waarde <code>value</code> <code>date</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>date</code>-waarde: <ul> <li><code>text</code>: een <code>date</code>-waarde van de tekstweergave. Raadpleeg <code>Date.FromText</code> voor meer informatie.</li> <li><code>datetime</code>: de datumcomponent van de <code>value</code>.</li> <li><code>datetimezone</code>: de datumcomponent van de lokale datetime-equivalent van <code>value</code>.</li> <li><code>number</code>: de datumcomponent van de datetime-equivalent van de OLE-automatiseringsdatum, uitgedrukt door <code>value</code>.</li> </ul>Als <code>value</code> van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt; omzetten naar een &lt;code&gt;date&lt;/code&gt;waarde.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; omzetten naar een &lt;code&gt;date&lt;/code&gt;waarde.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
