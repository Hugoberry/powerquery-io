---
title: Duration.From
---

# Duration.From


Opretter en varighed ud fra den angivne værdi.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Returnerer en værdi af typen <code>duration</code> ud fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, vil <code>Duration.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>duration</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>duration</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>duration</code> fra tekstformlen for forløbet tid (d.h:m:s). Se <code>Duration.FromText</code> for at få flere oplysninger.</li>        <li><code>number</code>: En ækvivalens af typen <code>duration</code> til antallet af hele eller dele af dage udtrykt ved <code>value</code>.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;2.525&lt;/code&gt; til en værdi af typen &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
