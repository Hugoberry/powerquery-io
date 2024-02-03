---
title: Time.FromText
---

# Time.FromText


## Description

Kreira vreme iz lokalnih i univerzalnih i prilagođenih formata vremena.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Kreira <code>time</code> vrednost iz tekstualnog prikaza, <code>text</code>. Za određivanje dodatnih svojstava može se navesti opcionalni parametar <code>record</code>, <code>options</code>. <code>record</code> može da sadrži sledeća polja:<ul>   <li><code>Format</code>: <code>text</code> vrednost koja označava format koji će se koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje <code>null</code> rezultiraće raščlanjivanjem vremena korišćenjem najboljeg napora.</li>   <li><code>Culture</code>: Kada <code>Format</code> nije bez vrednosti <code>Culture</code> kontroliše neke određivače formata. Na primer, u <code>"en-US"</code> <code>"tt"</code> je <code>"AM" or "PM"</code>, dok je u <code>"ar-EG"</code> <code>"tt"</code> je <code>"ص" ili "م"</code>. Kada je <code>Format</code> <code>null</code>, <code>Culture</code> kontroliše podrazumevani format koji će se koristiti. Kada je <code>Culture</code> <code>null</code> ili izostavljen, koristi se <code>Culture.Current</code>.</li></ul>Za podršku zastarelih tokova posla, i <code>options</code> može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; u vrednost vremena.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertovanje &lt;code&gt;&#34;1012&#34;&lt;/code&gt; u vrednost vremena.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertovanje &lt;code&gt;&#34;10&#34;&lt;/code&gt; u vrednost vremena.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
