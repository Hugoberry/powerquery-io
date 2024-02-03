---
title: Time.ToText
---

# Time.ToText


## Description

Returnează o reprezentare textuală a valorii de tip oră.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returnează o reprezentare textuală a <code>time</code>. Un parametru opțional de <code>record</code>, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. <code>culture</code> este utilizat numai pentru fluxuri de lucru moștenite. <code>record</code> poate conține următoarele câmpuri:<ul>   <li><code>Format</code>: o valoare <code>text</code> ce indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea <code>null</code> va duce la formatarea datei utilizând valoarea implicită definită de <code>Culture</code></li>.   <li><code>Culture</code>: atunci când <code>Format</code> nu este nul, <code>Culture</code> controlează anumiți specificatori de format. De exemplu, în <code>"en-US"</code> <code>"tt"</code> este <code>"AM" sau "PM"</code>, în timp ce în <code>"ar-EG"</code> <code>"tt"</code> este <code>"ص" sau "م"</code>.. Atunci când <code>Format</code> este <code>null</code>, <code>Culture</code> controlează formatul implicit de utilizat. Atunci când <code>Culture</code> este <code>null</code> sau se omite, se utilizează <code>Culture.Current</code>.</li></ul>Pentru a accepta fluxurile de lucru moștenite, <code>options</code> și <code>culture</code> pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Efectuați conversia &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; într-o valoare &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Rezultatul poate varia în funcție de cultura actuală.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Efectuați conversia utilizând formatul de oră standard.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
