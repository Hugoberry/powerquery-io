---
title: Date.From
---

# Date.From


## Description

Ustvari datum iz dane vrednosti.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Vrne vrednost <code>date</code> iz navedene vrednosti <code>value</code>. Navedete lahko tudi dodatni parameter <code>culture</code> (na primer "sl-SI").Če je navedena vrednost <code>value</code> <code>null</code>, <code>Date.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> <code>date</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>date</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>date</code> iz predstavitve v obliki besedila. Za podrobnosti glejte <code>Date.FromText</code>.</li>        <li><code>datetime</code>: komponenta "date" za <code>value</code>.</li>        <li><code>datetimezone</code>: komponenta "date" lokalnega ekvivalenta "datetime" za <code>value</code>.</li>        <li><code>number</code>: komponenta "date" vrednosti "datetime", ki ustreza datumu avtomatizacije OLE, izraženem z <code>value</code>.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;43910&lt;/code&gt; v vrednost &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Pretvorite &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; v vrednost &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
