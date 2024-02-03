---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

A datetimezone értéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

A(z) <code>dateTimeZone</code> szöveges alakját adja vissza. Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A(z) <code>culture</code> csak örökölt munkafolyamatok esetén használható. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum formázása a <code>Culture</code> paraméter által meghatározott alapértelmezett érték alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például az <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> lehet, míg a <code>"ru-RU"</code> esetén az <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> és a(z) <code>culture</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; konvertálása &lt;code&gt;text&lt;/code&gt; értékre. &lt;i&gt;Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Konvertálás az ISO 8601-mintával.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
