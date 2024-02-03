---
title: DateTime.From
---

# DateTime.From


## Description

Maakt een datum-/tijd van de opgegeven waarde.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Hiermee wordt een <code>datetime</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>DateTime.From</code> <code>null</code> geretourneerd. Als de opgegeven waarde <code>value</code> <code>datetime</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>datetime</code>-waarde: <ul> <li><code>text</code>: een <code>datetime</code>-waarde van de tekstweergave. Raadpleeg <code>DateTimeZone.FromText</code> voor meer informatie.</li> <li><code>date</code>: een <code>datetime</code> met <code>value</code> als het datumcomponent en <code>12:00:00 AM</code> als het tijdcomponent.</li> <li><code>datetimezone</code>: het lokale <code>datetime</code>-equivalent van <code>value</code>.</li> <li><code>time</code>: een <code>datetime</code> met het datumequivalent van de OLE-automatiseringsdatum van <code>0</code> als het datumcomponent en <code>value</code> als het tijdcomponent.</li> <li><code>number</code>: een <code>datetime</code>-equivalent van de OLE-automatiseringsdatum die wordt uitgedrukt door <code>value</code>. </li> </ul>Als <code>value</code> van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt; omzetten naar een &lt;code&gt;datetime&lt;/code&gt;waarde.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; omzetten naar een &lt;code&gt;datetime&lt;/code&gt;waarde.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
