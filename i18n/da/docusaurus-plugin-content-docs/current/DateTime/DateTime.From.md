---
title: DateTime.From
---

# DateTime.From


Opretter en dato og et klokkeslæt ud fra den angivne værdi.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returnerer en værdi af typen <code>datetime</code> ud fra den angivne <code>value</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").Hvis den angivne <code>value</code> er <code>null</code>, vil <code>DateTime.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>datetime</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>datetime</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>datetime</code> fra en tekstrepræsentation. Se <code>DateTime.FromText</code> for at få flere oplysninger.</li>        <li><code>date</code>: En værdi af typen <code>datetime</code> med <code>value</code> som datokomponent og <code>12:00:00 AM</code> som tidskomponent.</li>        <li><code>datetimezone</code>: Den lokale <code>datetime</code>-ækvivalens for <code>value</code>.</li>        <li><code>time</code>: En <code>datetime</code> med datoækvivalensen for OLE Automation-datoen <code>0</code> som datokomponent og <code>value</code> som klokkeslætskomponent.</li>        <li><code>number</code>: En <code>datetime</code>-ækvivalens for OLE Automation-datoen udtrykt ved <code>value</code>. </li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; til en værdi af typen &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertér &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; til en værdi af typen &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
