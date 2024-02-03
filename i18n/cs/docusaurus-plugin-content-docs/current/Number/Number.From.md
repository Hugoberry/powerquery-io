---
title: Number.From
---

# Number.From


## Description

Vytvoří číslo z předané hodnoty.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu <code>number</code> z předané hodnoty <code>value</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).d je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Number.From</code> vrátí hodnotu <code>null</code>.  Pokud je předaná hodnota <code>value</code> typu <code>number</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>number</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>number</code> z textové reprezentace. Lze zpracovat běžné textové formáty („15“, „3423,10“, „5,0E-10“). Další informace naleznete v popisu funkce <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 pro hodnotu <code>true</code>, 0 pro hodnotu <code>false</code>.</li>        <li><code>datetime</code>: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data OLE Automation.</li>        <li><code>datetimezone</code>: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data a času OLE Automation <code>value</code>.</li>        <li><code>date</code>: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data OLE Automation.</li>        <li><code>time</code>: Vyjádřeno ve zlomcích dnů.</li>        <li><code>duration</code>: Vyjádřeno v celých dnech a zlomcích dnů.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Získá hodnotu &lt;code&gt;number&lt;/code&gt; hodnoty &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získá hodnotu &lt;code&gt;number&lt;/code&gt; hodnoty &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Získá hodnotu typu &lt;code&gt;number&lt;/code&gt; pro &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
