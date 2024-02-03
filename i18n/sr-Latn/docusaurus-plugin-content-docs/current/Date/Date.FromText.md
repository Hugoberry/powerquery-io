---
title: Date.FromText
---

# Date.FromText


## Description

Kreira datum iz lokalnih, univerzalnih i prilagođenih formata datuma.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Kreira <code>date</code> vrednost iz tekstualnog prikaza, <code>text</code>. Za određivanje dodatnih svojstava može se navesti opcionalni parametar <code>record</code>, <code>options</code>. <code>record</code> može da sadrži sledeća polja:<ul>   <li><code>Format</code>: <code>text</code> vrednost koja označava format koji će se koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje <code>null</code> rezultiraće raščlanjivanjem datuma korišćenjem najboljeg napora.</li>   <li><code>Culture</code>: Kada <code>Format</code> nije bez vrednosti <code>Culture</code> kontroliše neke određivače formata. Na primer, u <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, dok je u <code>"ru-RU"</code> <code>"MMM"</code> <code>"яnv", "fev", "mar", ...</code>. Kada je <code>Format</code> <code>null</code>, <code>Culture</code> kontroliše podrazumevani format koji će se koristiti. Kada je <code>Culture</code> <code>null</code> ili izostavljen, koristi se <code>Culture.Current</code>.</li></ul>Za podršku zastarelih tokova posla, i <code>options</code> može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertuj &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; u &lt;code&gt;date&lt;/code&gt; vrednost.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konvertuj pomoću prilagođenog formata i nemačke kulture.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Pronađi datum u gregorijanskom kalendaru koji odgovara početku 1400. godine u Hidžra kalendaru.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
