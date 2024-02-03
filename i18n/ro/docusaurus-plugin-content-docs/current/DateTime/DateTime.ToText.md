---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Returnează o reprezentare textuală a valorii datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnează o reprezentare textuală a <code>dateTime</code>. Un parametru opțional de <code>record</code>, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>culture</code> este utilizat numai pentru fluxuri de lucru moștenite. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea <code>null</code> va duce la formatarea datei utilizând valoarea implicită definită de <code>Culture</code>.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este nul, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"MMM"</code> este <code>"Jan", "Feb", "Mar", ...</code>, în timp ce în <code>"ru-RU"</code> <code>"MMM"</code> este <code>"янв", "фев", "мар", ...</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> și <code>culture</code> pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; într-o valoare &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Rezultatul poate varia în funcție de cultura actuală.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Efectuați conversia utilizând modelul ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
