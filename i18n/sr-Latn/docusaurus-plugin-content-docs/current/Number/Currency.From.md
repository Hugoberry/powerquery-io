---
title: Currency.From
---

# Currency.From


## Description

Vraća vrednost valute iz date vrednosti.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vraća vrednost <code>currency</code> iz date vrednosti <code>value</code>. Ako je data vrednost <code>value</code> <code>null</code>, <code>Currency.Iz</code> vraća <code>null</code>. Ako je data vrednost <code>value</code> <code>number</code> u opsegu valute, decimalni deo vrednosti <code>value</code> zaokružuje se na 4 decimalne cifre i vraća se. Ako vrednost <code>value</code> pripada drugom tipu, biće prvo konvertovana u <code>number</code>, koristeći <code>Number.FromText</code>. Važeći opseg za valutu je od <code>-922.337.203.685.477,5808</code> do <code>922.337.203.685.477,5807</code>. Pogledajte <code>Number.Round</code> za dostupne režime zaokruživanja. Podrazumevani je <code>RoundingMode.ToEven</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Preuzmite vrednost &lt;code&gt;currency&lt;/code&gt; od &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Dobijte &lt;code&gt;currency&lt;/code&gt; vrednost &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; koristeći &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
