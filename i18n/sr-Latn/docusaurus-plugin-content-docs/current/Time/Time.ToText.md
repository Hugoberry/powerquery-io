---
title: Time.ToText
---

# Time.ToText


## Description

Vraća tekstualnu reprezentaciju vrednosti vremena.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Daje tekstualni prikaz <code>time</code>. Za određivanje dodatnih svojstava može se navesti opcionalni parametar <code>record</code>, <code>options</code>. <code>culture</code> se koristi samo za zastarele tokove posla. <code>record</code> može da sadrži sledeća polja:<ul>   <li><code>Format</code>:A <code>text</code> vrednost koja označava format koji će se koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje <code>null</code> rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše <code>Culture</code>.</li>   <li><code>Culture</code>: Kada <code>Format</code> nije bez vrednosti <code>Culture</code> kontroliše neke određivače formata. Na primer, u <code>"en-US"</code> <code>"tt"</code> je <code>"AM" ili "PM"</code>, dok je u <code>"ar-EG"</code> <code>"tt"</code> je <code>"ص" ili "م"</code>. Kada je <code>Format</code> <code>null</code>, <code>Culture</code> kontroliše podrazumevani format koji će se koristiti. Kada je <code>Culture</code> <code>null</code> ili izostavljen, koristi se <code>Culture.Current</code>.</li></ul>Za podršku zastarelih tokova posla, <code>options</code> i <code>culture</code> mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertuj &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; u &lt;code&gt;text&lt;/code&gt; vrednost. &lt;i&gt;Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertuj pomoću standardnog formata vremena.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
