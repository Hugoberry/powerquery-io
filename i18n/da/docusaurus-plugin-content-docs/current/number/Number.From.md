---
title: Number.From
---

# Number.From


Opretter et tal ud fra den angivne værdi.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen <code>number</code> ud fra den angivne <code>value</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").Hvis den angivne <code>value</code> er <code>null</code>, vil <code>Number.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>number</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>number</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>number</code> fra en tekstrepræsentation. Almindelige tekstformater håndteres (15", "3,423.10", "5.0E-10"). Se <code>Number.FromText</code> for at få flere oplysninger.</li>        <li><code>logical</code>: 1 for <code>true</code>, 0 for <code>false</code>.</li>        <li><code>datetime</code>: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens.</li>        <li><code>datetimezone</code>: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens for den lokale dato og det lokale klokkeslæt, <code>value</code>.</li>        <li><code>date</code>: Et reelt tal med dobbeltpræcision, der indeholder en OLE Automation-datoækvivalens.</li>        <li><code>time</code>:  Udtrykt i brøkdage.</li>        <li><code>duration</code>: Udtrykt i hele dage og brøkdage.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Hent &lt;code&gt;&#34;4&#34;&lt;/code&gt; for værdien &lt;code&gt;number&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hent &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; for værdien &lt;code&gt;number&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Hent &lt;code&gt;tal&lt;/code&gt;værdien af &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
