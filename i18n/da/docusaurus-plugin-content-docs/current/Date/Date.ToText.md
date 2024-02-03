---
title: Date.ToText
---

# Date.ToText


## Description

Returnerer en tekstrepræsentation for datoværdien.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnerer en tekstrepræsentation af <code>date</code>. Der kan angives en valgfri <code>record</code> parameter <code>options</code> for at angive yderligere egenskaber. <code>culture</code> bruges kun til ældre arbejdsprocesser. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code>, der angiver det format, der skal bruges. Du kan få flere oplysninger ved at gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105. Hvis du udelader dette felt eller angiver <code>null</code> vil det resultere i formatering af datoen ved hjælp af den standard, der er defineret af <code>Culture</code>.</li>   <li><code>Culture</code>: Når <code>Format</code> ikke er null, styrer <code>Culture</code> nogle formatangivelser. For eksempel i <code>"en-US"</code> <code>"MMM"</code> er <code>"januar", "februar", "marts", ... </code>, mens du er i <code>"ru-RU"</code> er <code>"MMM"</code> <code>"янв", "фев", "мар", ... </code>. Når <code>Format</code> er <code>null</code>, styrer <code>Culture</code> det standardformat, der skal bruges. Når <code>Culture</code> er <code>null</code> eller udelades, bruges <code>Culture.Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> og <code>culture</code> også være tekstværdier. Dette har samme funktionsmåde, som hvis <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konverter &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; til en værdi af typen &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Resultatoutput kan variere afhængigt af den aktuelle kultur.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konverter ved hjælp af et brugerdefineret format og den tyske kultur.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Find året i den hijri-kalenderen, der svarer til den 1. januar 2000 i den gregoriansk kalender.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
