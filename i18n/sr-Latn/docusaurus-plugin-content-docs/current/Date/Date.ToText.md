---
title: Date.ToText
---

# Date.ToText


## Description

Vraća tekstualnu reprezentaciju vrednosti datuma.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Daje tekstualni prikaz <code>date</code>. Za određivanje dodatnih svojstava može se navesti opcionalni parametar <code>record</code>, <code>options</code>. <code>culture</code> se koristi samo za zastarele tokove posla. <code>record</code> može da sadrži sledeća polja:<ul>   <li><code>Format</code>:A <code>text</code> vrednost koja označava format koji će se koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje <code>null</code> rezultiraće oblikovanjem datuma korišćenjem podrazumevane vrednosti koju definiše <code>Culture</code>.</li>   <li><code>Culture</code>: Kada <code>Format</code> nije bez vrednosti <code>Culture</code> kontroliše neke određivače formata. Na primer, u <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, dok je u <code>"ru-RU"</code> <code>"MMM"</code> <code>"яnv", "fev", "mar", ...</code>. Kada je <code>Format</code> <code>null</code>, <code>Culture</code> kontroliše podrazumevani format koji će se koristiti. Kada je <code>Culture</code> <code>null</code> ili izostavljen, koristi se <code>Culture.Current</code>.</li></ul>Za podršku zastarelih tokova posla, <code>options</code> i <code>culture</code> mogu da budu tekstualne vrednosti. Ovo ima isto ponašanje kao da je <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertuj &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; u &lt;code&gt;text&lt;/code&gt; vrednost. &lt;i&gt;Izlaz rezultata može da se razlikuje u zavisnosti od trenutne kulture.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Pronađi godinu u Hidžra kalendaru koja odgovara 1. januaru 2000. godine u gregorijanskom kalendaru.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
