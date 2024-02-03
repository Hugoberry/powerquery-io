---
title: Time.ToText
---

# Time.ToText


## Description

Returnerer en tekstrepræsentation for klokkeslætsværdien.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnerer en tekstrepræsentation af <code>time</code>. Der kan angives en valgfri <code>record</code> parameter, <code>options</code>, for at angive yderligere egenskaber. <code>culture</code> bruges kun til ældre arbejdsprocesser. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code>, som angiver det format, der skal bruges. Du kan få flere oplysninger ved at gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105. Hvis du udelader dette felt eller angiver <code>null</code> medfører det, at datoen formateres ved hjælp af den standard, der er defineret af <code>Culture</code>.</li>   <li><code>Culture</code>: Når <code>Format</code> ikke er null,  <code>Culture</code> styrer nogle formatangivelser. For eksempel i <code>"en-US"</code> <code>"tt"</code> er <code>"AM" eller "PM"</code> i <code>"ar-EG"</code> <code>"tt"</code> er <code>"ص" eller "م"</code>. Når <code>Format</code> er <code>null</code>, styrer <code>Culture</code> det standardformat, der skal bruges. Når <code>Culture</code> <code>null</code> eller udelades, bruges <code>Culture.Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> og <code>culture</code> også være tekstværdier. Dette har samme funktionsmåde, som hvis <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konverter &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; til en værdi af typen &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Resultatoutput kan variere afhængigt af den aktuelle kultur.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konverter ved hjælp af et brugerdefineret format og den tyske kultur.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertér ved hjælp af standardformatet for klokkeslæt.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
