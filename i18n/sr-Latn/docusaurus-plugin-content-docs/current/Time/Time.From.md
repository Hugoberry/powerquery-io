---
title: Time.From
---

# Time.From


## Description

Kreira vreme od date vrednosti.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Vraća vrednost <code>time</code> od datog <code>value</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).Ako dati <code>value</code> predstavlja <code>null</code>, <code>Time.From</code> vraća <code>null</code>. Ako dati <code>value</code> predstavlja <code>time</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>time</code>:      <ul>        <li><code>text</code>: Vrednost <code>time</code> od tekstualne reprezentacije. Pogledajte <code>Time.FromText</code> za detalje.</li>        <li><code>datetime</code>: Komponenta vremena za <code>value</code>.</li>        <li><code>datetimezone</code>: Komponenta vremena lokalnog ekvivalenta datuma i vremena za <code>value</code>.</li>        <li><code>number</code>: <code>time</code> ekvivalent broju decimalnih dana izraženih pomoću <code>value</code>. Ako je <code>value</code> negativno ili veće ili jednako 1, vraća se greška.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;0.7575&lt;/code&gt; u vrednost &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertovanje &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; u vrednost &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
