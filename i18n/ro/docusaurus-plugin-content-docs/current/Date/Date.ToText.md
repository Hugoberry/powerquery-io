---
title: Date.ToText
---

# Date.ToText


## Description

Returnează o reprezentare textuală a valorii de tip dată.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnează o reprezentare textuală a <code>date</code>. Un parametru opțional de <code>record</code>, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>culture</code> este utilizat numai pentru fluxuri de lucru moștenite. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea <code>null</code> va duce la formatarea datei utilizând valoarea implicită definită de <code>Culture</code>.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este nul, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"MMM"</code> este <code>"Jan", "Feb", "Mar", ...</code>, în timp ce în <code>"ru-RU"</code> <code>"MMM"</code> este <code>"янв", "фев", "мар", ...</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> și <code>culture</code> pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; într-o valoare &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Rezultatul poate varia în funcție de cultura actuală.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Găsiți anul din calendarul Hijri care corespunde datei de 1 ianuarie 2000 din calendarul gregorian.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
