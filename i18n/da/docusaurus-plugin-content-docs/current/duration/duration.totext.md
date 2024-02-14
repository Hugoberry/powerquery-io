---
title: Duration.ToText
---

# Duration.ToText


Returnerer teksten i formatet &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Returnerer en tekstrepræsentation i formatet "dag.time:mins:sek" for den givne varighedsværdi, <code>duration</code>. <ul>        <li><code>duration</code>: A <code>varighed</code> hvorfra tekstrepræsentationen beregnes.</li>  <li><code>format</code>: <i>[Optional]</i> Frarådes, vil udløse en fejl, hvis den ikke er null</li>      </ul>


## Examples

### Example #1 
Konvertér &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; til en tekstværdi.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
