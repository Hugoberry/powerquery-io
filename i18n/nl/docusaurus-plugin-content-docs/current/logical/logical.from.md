---
title: Logical.From
---

# Logical.From


Maakt van de opgegeven waarde een logische waarde.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Hiermee wordt een <code>logical</code>-waarde geretourneerd van de opgegeven waarde <code>value</code>. Als de opgegeven waarde <code>value</code> <code>null</code> is, retourneert <code>Logical.From</code> <code>null</code>. Als de opgegeven waarde <code>value</code> <code>logical</code> is, wordt <code>value</code> geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een <code>logical</code>-waarde: <ul> <li><code>text</code>: een <code>logical</code>-waarde van de tekstwaarde, ofwel <code>"true"</code> of <code>"false"</code>. Raadpleeg <code>Logical.FromText</code> voor meer informatie.</li> <li><code>number</code>: <code>false</code> als <code>value</code> gelijk is aan <code>0</code>, anders <code>true</code>.</li> </ul>Als <code>value</code> van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1 
Het getal &lt;code&gt;2&lt;/code&gt; converteren naar een &lt;code&gt;logical&lt;/code&gt; waarde.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
