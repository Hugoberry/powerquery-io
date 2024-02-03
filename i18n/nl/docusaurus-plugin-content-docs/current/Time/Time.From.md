---
title: Time.From
---

# Time.From


## Description

Maakt een tijd van de opgegeven waarde.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Hiermee wordt een <code>time</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).Als de opgegeven waarde <code>value</code> <code>null</code> is, wordt door <code>Time.From</code> <code>null</code> geretourneerd. Als de opgegeven waarde <code>value</code> <code>time</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>time</code>-waarde: <ul> <li><code>text</code>: een <code>time</code>-waarde van de tekstweergave. Raadpleeg <code>Time.FromText</code> voor meer informatie.</li> <li><code>datetime</code>: het tijdcomponent van de <code>value</code>.</li> <li><code>datetimezone</code>: het tijdcomponent van de lokale datetime-equivalent van <code>value</code>.</li> <li><code>number</code>: een <code>time</code>-equivalent voor het aantal gedeeltelijke dagen, uitgedrukt door <code>value</code>. Als <code>value</code> negatief of groter dan 1 is, wordt een fout geretourneerd.</li> </ul>Als <code>value</code> van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1 
Het getal &lt;code&gt;0.7575&lt;/code&gt; converteren naar een &lt;code&gt;time&lt;/code&gt;waarde.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; converteren naar een &lt;code&gt;time&lt;/code&gt;waarde.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
