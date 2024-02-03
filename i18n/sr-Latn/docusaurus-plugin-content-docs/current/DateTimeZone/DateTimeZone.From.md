---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Kreira datum i vremensku zonu od date vrednosti.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Vraća vrednost <code>datetimezone</code> od datog <code>value</code>. Opcionalno se može navesti i <code>culture</code> (na primer, 
<code>value</code>Ako dati <code>value</code> predstavlјa <code>null</code>, <code>DateTimeZone.From</code> vraća <code>null</code>. Ako dati <code>value</code> predstavlјa <code>datetimezone</code>, vraća se 


<code>value</code>        <li><code>date</code>: <code>datetimezone</code> sa 
<code>value</code>        <li><code>datetime</code>: <code>datetimezone</code> sa 
<code>value</code>        <li><code>time</code>: <code>datetimezone</code> sa ekvivalentom datuma za datum OLE automatizacije sa <code>0</code> kao komponentom datuma, 
<code>value</code>        <li><code>number</code>: <code>datetimezone</code> sa datumom i vremenom ekvivalentnim datumu OLE automatizacije izraženim pomoću 

<code>value</code>Ako je  nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; u vrednost &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone