---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Opretter en datetimezone ud fra den angivne værdi.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Returnerer en værdi af typen <code>datetimezone</code> fra den angivne <code>value</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>DateTimeZone.From</code> <code>null</code>. Hvis den angivne <code>value</code> er <code>datetimezone</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en <code>datetimezone</code> værdi:      <ul>      <li><code>text</code>: En <code>datetimezone</code> værdi fra tekstrepræsentation. Se <code>DateTimeZone.FromText</code> for oplysninger..</li>      <li><code>date</code>: En <code>datetimezone</code> med <code>value</code> som datokomponenten,<code>12:00:00</code> som tidskomponenten og forskydningen, der svarer til den lokale tidszone.</li>        <li><code>datetime</code>: En <code>datetimezone</code> med <code>value</code> som datetime og den forskydning, der svarer til den lokale tidszone.</li>      <li><code>time</code>: En <code>datetimezone</code> med den dato, der svarer til OLE Automation-datoen for <code>0</code> som datokomponenten, <code>value</code> som tidskomponenten og den forskydning, der svarer til den lokale tidszone.</li>      <li><code>number</code>: En <code>datetimezone</code> med den datetime, der svarer til OLE Automation-datoen udtrykt i <code>value</code> og den forskydning, der svarer til den lokale tidszone.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; til en værdi af typen &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
