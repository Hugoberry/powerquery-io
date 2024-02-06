---
title: Time.From
---

# Time.From


Opretter et klokkeslæt ud fra den angivne værdi.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returnerer en værdi af typen <code>time</code> ud fra den angivne <code>value</code>. Der kan også gives angives en valgfri <code>culture</code> (f.eks. "en-US").Hvis den angivne <code>value</code> er <code>null</code>, vil <code>Time.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>time</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>time</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>time</code> fra en tekstrepræsentation. Se <code>Time.FromText</code> for at få flere oplysninger.</li>        <li><code>datetime</code>: Klokkeslætskomponent for <code>value</code>.</li>        <li><code>datetimezone</code>: Klokkeslætskomponenten for den lokale datetime-ækvivalens for <code>value</code>.</li>        <li><code>number</code>: En ækvivalens af typen <code>time</code> til antallet af brøkdage udtrykt ved <code>value</code>. Hvis <code>value</code> er negativ eller større end eller lig med 1, returneres der en fejl.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;0.7575&lt;/code&gt; til en værdi af typen &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertér &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; til en værdi af typen &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
