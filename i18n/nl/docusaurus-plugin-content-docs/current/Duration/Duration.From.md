---
title: Duration.From
---

# Duration.From


## Description

Maakt een duur van de opgegeven waarde.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Hiermee wordt een <code>duration</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Als de opgegeven waarde <code>value</code> <code>null</code> is, retourneert <code>Duration.From</code> <code>null</code>. Als de opgegeven waarde <code>value</code> <code>duration</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>duration</code>-waarde: <ul> <li><code>text</code>: een <code>duration</code>-waarde van tekstuele formulieren met verstreken tijd (d.h:m:s). Raadpleeg <code>Duration.FromText</code> voor meer informatie.</li> <li><code>number</code>: een <code>duration</code> equivalent voor het aantal gehele en gedeeltelijke dagen, uitgedrukt door <code>value</code>.</li> </ul>Als <code>value</code> van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1 
Zet &lt;code&gt;2.525&lt;/code&gt; om naar een &lt;code&gt;duration&lt;/code&gt;waarde.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
