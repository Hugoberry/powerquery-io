---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Kreira datum i vremensku zonu od lokalnog i univerzalnog formata datuma i vremena.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Kreira <code>datetime</code> vrednost iz tekstualnog prikaza, <code>text</code>. Za određivanje dodatnih svojstava može se navesti opcionalni parametar <code>record</code>, <code>options</code>. <code>record</code> može da sadrži sledeća polja:<ul>   <li><code>Format</code>: <code>text</code> vrednost koja označava format koji će se koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje <code>null</code> rezultiraće raščlanjivanjem datuma korišćenjem najboljeg napora.</li>   <li><code>Culture</code>: Kada <code>Format</code> nije bez vrednosti <code>Culture</code> kontroliše neke određivače formata. Na primer, u <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, dok je u <code>"ru-RU"</code> <code>"MMM"</code> <code>"яnv", "fev", "mar", ...</code>. Kada je <code>Format</code> <code>null</code>, <code>Culture</code> kontroliše podrazumevani format koji će se koristiti. Kada je <code>Culture</code> <code>null</code> ili izostavljen, koristi se <code>Culture.Current</code>.</li></ul>Za podršku zastarelih tokova posla, i <code>options</code> može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertuj &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; u vrednost datuma i vremena.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertuj &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; u vrednost datuma i vremena.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertuj &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; u vrednost datuma i vremena.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertuj &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; u vrednost datuma i vremena.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
