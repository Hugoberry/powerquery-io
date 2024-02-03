---
title: Date.FromText
---

# Date.FromText


## Description

Creează o dată din formate de dată locale, universale și particularizate.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Creează o valoare <code>date</code> dintr-o reprezentare textuală, <code>text</code>. Un parametru <code>record</code> opțional, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează <code>null</code>, acest lucru va duce la analizarea datei utilizând cel mai bun efort.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este null, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"MMM"</code> este <code>"Jan", "Feb", "Mar", ...</code>, în timp ce în <code>"ru-RU"</code> <code>"MMM"</code> este <code>"янв", "фев", "мар", ...</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; într-o valoare &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Găsiți data din calendarul gregorian care corespunde începutului anului 1400 din calendarul Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
