---
title: Date.FromText
---

# Date.FromText


Opretter en dato fra lokale, universelle og brugerdefinerede datoformater.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Opretter en værdi af typen <code>datoværdi</code> ud fra en tekstrepræsentation, <code>text</code>. En valgfri <code>record</code> parameter <code>options</code> kan leveres for at specificere yderligere egenskaber. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code> angiver det format, der skal bruges. Gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105 for at få flere oplysninger. Udeladelse af dette felt eller angivelse af <code>null</code> vil resultere i parsing af datoen efter bedste evne.</li>   <li><code>Culture</code> : Når <code>Format</code> ikke er null, kontrollerer <code>Culture</code> nogle formatspecifikationer. For eksempel i <code>"en-US"</code> er <code>"MMM"</code> <code>"januar", "februar", "marts", ...</code>, mens i <code>"ru-RU"</code> er <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code>. Når <code>Format</code> er <code>null</code>, kontrollerer <code>Culture</code> standardformatet, der skal bruges. Når <code>Culture</code> er <code>null</code> eller udeladt, bruges <code>Culture Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> også være en tekstværdi. Dette har den samme funktionsmåde som hvis <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; til en værdi af typen &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konverter ved hjælp af et brugerdefineret format og den tyske kultur.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Find datoen i den gregorianske kalender, der svarer til begyndelsen af 1400 i hijri-kalenderen.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
