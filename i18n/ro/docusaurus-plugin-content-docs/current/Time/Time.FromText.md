---
title: Time.FromText
---

# Time.FromText


## Description

Creează o valoare Time din formatele Time locale, universale și particularizate.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Creează o valoare <code>time</code> dintr-o reprezentare textuală, <code>text</code>. Un parametru <code>record</code> opțional, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează <code>null</code>, acest lucru va duce la analizarea datei utilizând cel mai bun efort.</li>   <li><code>Culture</code>: atunci când <code>Format</code> nu este null, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"tt"</code> este <code>"AM" sau "PM"</code>, în timp ce în <code>"ar-EG"</code> <code>"tt"</code> este <code>"ص" sau "م"</code>. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertiţi &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; într-o valoare pentru oră.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Convertiți &lt;code&gt;&#34;1012&#34;&lt;/code&gt; într-o valoare Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Convertiți &lt;code&gt;&#34;10&#34;&lt;/code&gt; într-o valoare Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
