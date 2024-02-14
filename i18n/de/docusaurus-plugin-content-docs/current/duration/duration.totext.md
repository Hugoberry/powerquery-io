---
title: Duration.ToText
---

# Duration.ToText


Gibt den Text im Format &#34;d.h:m:s&#34; zurück.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Gibt eine Textdarstellung im Format "day.hour:mins:sec" des angegebenen Werts für die Dauer (<code>duration</code>) zurück. <ul>        <li><code>duration</code>: Eine Dauer (<code>duration</code>), aus der die Textdarstellung berechnet wird.</li>  <li><code>format</code>: <i>[Optional]</i> Veraltet. Bei einem Wert ungleich NULL wird ein Fehler ausgelöst.</li>      </ul>


## Examples

### Example #1 
Konvertiert &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; in einen Textwert.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
