---
title: DateTime.From
---

# DateTime.From


## Description

Kreira datum i vreme od date vrednosti.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Vraća vrednost <code>datetime</code> od datog <code>value</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).Ako dati <code>value</code> predstavlja <code>null</code>, <code>DateTime.From</code> vraća <code>null</code>. Ako dati <code>value</code> predstavlja <code>datetime</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>datetime</code>:      <ul>        <li><code>text</code>: Vrednost <code>datetime</code> od tekstualne reprezentacije. Pogledajte <code>DateTime.FromText</code> za detalje.</li>        <li><code>date</code>: <code>datetime</code> sa <code>value</code> kao komponentom datuma i <code>12:00:00 AM</code> kao komponentom vremena.</li>        <li><code>datetimezone</code>: Lokalni <code>datetime</code> ekvivalent za <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> sa ekvivalentom datuma za datum OLE automatizacije sa <code>0</code> kao komponentom datuma i <code>value</code> kao komponentom vremena.</li>        <li><code>number</code>: <code>datetime</code> ekvivalent datuma OLE automatizacije izražen pomoću <code>value</code>. </li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; u vrednost &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertovanje &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; u vrednost &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
