---
title: Number.From
---

# Number.From


## Description

Vytvorí číslo z danej hodnoty.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vráti hodnotu <code>number</code> zo zadanej hodnoty <code>value</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>Number.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>number</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>number</code>:      <ul>        <li><code>text</code>: Hodnota <code>number</code> z textového vyjadrenia. Spracujú sa bežné formáty textu ("15", "3,423.10", "5.0E-10"). Podrobnosti nájdete v časti <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 pre hodnotu <code>true</code>, 0 pre hodnotu <code>false</code>.</li>        <li><code>datetime</code>: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE.</li>        <li><code>datetimezone</code>: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE miestneho dátumu a času <code>value</code>.</li>        <li><code>date</code>: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE.</li>        <li><code>time</code>: Vyjadrené v zlomkových dňoch.</li>        <li><code>duration</code>: Vyjadrené v celých a v zlomkových dňoch.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; čísla &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; čísla &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Získajte hodnotu &lt;code&gt;number&lt;/code&gt; z čísla &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
