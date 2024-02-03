---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Creează o valoare datetimezone din valoarea dată.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Returnează o valoare <code>datetimezone</code> din <code>value</code> dat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, "ro-RO").Dacă <code>value</code> dat este <code>null</code>, <code>DateTimeZone.From</code> returnează <code>null</code>. Dacă <code>value</code> dat este <code>datetimezone</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite într-o valoare <code>datetimezone</code>:      <ul>        <li><code>text</code>: o valoare <code>datetimezone</code> din reprezentarea textuală. Pentru detalii, consultați <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: o valoare <code>datetimezone</code> cu <code>value</code> drept componentă date, <code>12:00:00 AM</code> drept componentă time și decalajul corespunzător fusului orar local.</li>        <li><code>datetime</code>: o valoare <code>datetimezone</code> cu <code>value</code> ca valoare datetime și decalajul corespunzător fusului orar local.</li>        <li><code>time</code>: o valoare <code>datetimezone</code> cu echivalentul de tip date al OLE Automation Date de <code>0</code> pentru componenta date, <code>value</code> pentru componenta time și decalajul corespunzător fusului orar local.</li>        <li><code>number</code>: o valoare <code>datetimezone</code> cu echivalentul de tip datetime al datei OLE Automation exprimată de <code>value</code> și decalajul corespunzător fusului orar local.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; la o valoare &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
