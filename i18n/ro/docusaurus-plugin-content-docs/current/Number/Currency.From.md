---
title: Currency.From
---

# Currency.From


## Description

Returnează o valoare monetară din valoarea dată.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnează o valoare <code>currency</code> pornind de la valoarea <code>value</code> dată. Dacă valoarea <code>value</code> dată este <code>null</code>, <code>Currency.From</code> returnează <code>null</code>.  Dacă valoarea <code>value</code> dată este o valoare <code>number</code> din intervalul valorilor monetare, partea fracționară din <code>value</code> este rotunjită la 4 cifre zecimale și returnată. Dacă valoarea <code>value</code> dată este de orice alt tip, va fi convertită mai întâi la o valoare <code>number</code>utilizând <code>Number.FromText</code>. Intervalul valid pentru valori monetare este de la <code>-922.337.203.685.477,5808</code> la <code>922.337.203.685.477,5807</code>. Consultați <code>Number.Round</code> pentru a afla informații despre modurile de rotunjire disponibile. Valoarea implicită este <code>RoundingMode.ToEven</code>. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Obțineți valoarea &lt;code&gt;currency&lt;/code&gt; &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Obțineți valoarea &lt;code&gt;currency&lt;/code&gt; pentru &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; utilizând &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
