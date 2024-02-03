---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Creează un datetimezone din formatele datetimezone local, universal și particularizat.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Creează o valoare <code>datetimezone</code> dintr-o reprezentare textuală, <code>text</code>. Un parametru <code>record</code> opțional, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează <code>null</code>, acest lucru va duce la analizarea datei utilizând cel mai bun efort.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este null, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"MMM"</code> este <code>"Jan", "Feb", "Mar", ...</code>, în timp ce în <code>"ru-RU"</code> <code>"MMM"</code> este <code>"янв", "фев", "мар", ...</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; într-o valoare &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Efectuați conversia utilizând ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
