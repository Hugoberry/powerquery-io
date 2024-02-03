---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Creează o valoare datetimezone din formatele datetime locale şi universale.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Creează o valoare <code>datetime</code> dintr-o reprezentare textuală, <code>text</code>. Un parametru <code>record</code> opțional, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează <code>null</code>, acest lucru va duce la analizarea datei utilizând cel mai bun efort.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este null, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"MMM"</code> este <code>"Jan", "Feb", "Mar", ...</code>, în timp ce în <code>"ru-RU"</code> <code>"MMM"</code> este <code>"янв", "фев", "мар", ...</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; într-o valoare datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Efectuați conversia &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; într-o valoare datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Efectuați conversia &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; într-o valoare datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Efectuați conversia &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; într-o valoare datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
