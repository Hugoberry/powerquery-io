---
title: Duration.ToText
---

# Duration.ToText


## Description

Retourneert de tekst van de vorm &#34;d.u:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Hiermee wordt een tekstweergave geretourneerd in de vorm "dag.uur:min:sec" van de opgegeven duurwaarde <code>duration</code>. <ul> <li><code>duration</code>: een <code>duur</code> op basis waarvan de tekstweergave wordt berekend.</li>  <li><code>format</code>: <i>[Optioneel]</i> verouderd, genereert een fout als deze niet null is</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; omzetten naar een tekstwaarde.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
