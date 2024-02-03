---
title: Number.From
---

# Number.From


## Description

Creează un număr din valoarea dată.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnează o valoare <code>number</code> din <code>value</code> dat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).Dacă <code>value</code> dat este <code>null</code>, <code>Number.From</code> returnează <code>null</code>.  Dacă <code>value</code> dat este <code>number</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite la o valoare <code>number</code>:      <ul>        <li><code>text</code>: o valoare <code>number</code> din reprezentarea textuală. Sunt tratate formate text obișnuite („15”, „3,423.10”, „5.0E-10”). Pentru detalii, consultați <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 pentru <code>true</code>, 0 pentru <code>false</code>.</li>        <li><code>datetime</code>: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent dată OLE Automation.</li>        <li><code>datetimezone</code>: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent al datei OLE Automation al datei și orei locale de <code>value</code>.</li>        <li><code>date</code>: un număr în virgulă mobilă cu dublă precizie, ce conține un echivalent dată OLE Automation.</li>        <li><code>time</code>: exprimată în zile fracționare.</li>        <li><code>duration</code>: exprimată în zile întregi și fracționare.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Obţineţi valoarea &lt;code&gt;number&lt;/code&gt; de &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obţineţi valoarea &lt;code&gt;number&lt;/code&gt; a &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Obțineți valoarea &lt;code&gt;number&lt;/code&gt; a &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
