---
title: Date.From
---

# Date.From


Opretter en dato ud fra den angivne værdi.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Returnerer en værdi af typen <code>date</code> ud fra den angivne <code>value</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").Hvis den angivne <code>value</code> er <code>null</code>, vil <code>Date.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>date</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>date</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>date</code> fra en tekstrepræsentation. Se <code>Date.FromText</code> for at få flere oplysninger.</li>        <li><code>datetime</code>: Datokomponenten for <code>value</code>.</li>        <li><code>datetimezone</code>: Datokomponenten for den lokale datetime-ækvivalens for <code>value</code>.</li>        <li><code>number</code>: Datokomponenten for datetime-ækvivalensen for OLE Automation-datoen udtrykt ved <code>value</code>.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;43910&lt;/code&gt; til en værdi af typen &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertér &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; til en værdi af typen &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
