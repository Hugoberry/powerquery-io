---
title: Date.From
---

# Date.From


## Description

Vytvorí dátum z danej hodnoty.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Vráti hodnotu <code>date</code> zo zadanej hodnoty <code>value</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>Date.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>date</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>date</code>:      <ul>        <li><code>text</code>: Hodnota <code>date</code> z textového vyjadrenia. Podrobnosti nájdete v časti <code>Date.FromText</code>.</li>        <li><code>datetime</code>: Súčasť dátumu hodnoty <code>value</code>.</li>        <li><code>datetimezone</code>: Súčasť dátumu ekvivalentu miestneho dátumu a času hodnoty <code>value</code>.</li>        <li><code>number</code>: Súčasť dátumu ekvivalentu dátumu a času k dátumu automatizácie OLE vyjadrený pomocou funkcie <code>value</code>.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;43910&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertujte hodnotu &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
