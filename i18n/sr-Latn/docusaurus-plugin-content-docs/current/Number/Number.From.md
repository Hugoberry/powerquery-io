---
title: Number.From
---

# Number.From


## Description

Kreira broj od date vrednosti.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vraća vrednost <code>number</code> od datog <code>value</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).Ako dati <code>value</code> predstavlja <code>null</code>, <code>Number.From</code> vraća <code>null</code>. Ako dati <code>value</code> predstavlja <code>number</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>number</code>:      <ul>        <li><code>text</code>: Vrednost <code>number</code> od tekstualne reprezentacije. Obrađuju se uobičajeni tekstualni formati ("15", "3,423.10", "5.0E-10"). Pogledajte <code>Number.FromText</code> za detalje.</li>        <li><code>logical</code>: 1 za <code>true</code>, 0 za <code>false</code>.</li>        <li><code>datetime</code>: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije.</li>        <li><code>datetimezone</code>: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije za lokalni datum i vreme <code>value</code>.</li>        <li><code>date</code>: Broj dvostruke preciznosti sa pokretnim zarezom koji sadrži ekvivalent datuma OLE automatizacije.</li>        <li><code>time</code>: Izraženo u decimalnim danima.</li>        <li><code>duration</code>: Izraženo u celim i decimalnim danima.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Dobijanje vrednosti &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dobijanje vrednosti &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Preuzmite vrednost &lt;code&gt;broj&lt;/code&gt; od &lt;code&gt;„12,3%“&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
