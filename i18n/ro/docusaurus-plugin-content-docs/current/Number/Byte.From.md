---
title: Byte.From
---

# Byte.From


## Description

Creează un număr întreg, pe 8 biți, din valoarea dată.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnează o valoare <code>number</code> întreagă, pe 8 biți, din <code>value</code>dată. Dacă <code>value</code> dată este <code>null</code>, <code>Byte.From</code> returnează <code>null</code>. Dacă <code>value</code> dată este un <code>number</code> în intervalul de numere întregi pe 8 biți fără parte fracționară, se returnează <code>value</code>. Dacă are o parte fracționară, numărul este rotunjit cu modul de rotunjire specificat. Modul de rotunjire implicit este <code>RoundingMode.ToEven</code>. Dacă <code>value</code> este de orice alt tip, se va efectua mai întâi conversia la un <code>number</code> utilizând <code>Number.FromText</code>. Consultați <code>Number.Round</code> pentru modurile de rotunjire disponibile. De asemenea, poate fi furnizată o <code>culture</code> opțională (de exemplu, „ro-RO”).


## Examples

### Example #1 
Obțineți valoarea &lt;code&gt;number&lt;/code&gt; întreagă, pe 8 biți, pentru &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Obțineți valoarea &lt;code&gt;number&lt;/code&gt; întreagă, pe 8 biți, pentru &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;, utilizând &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
