---
title: Date.From
---

# Date.From


## Description

Vytvoří datum z předané hodnoty.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Vrátí hodnotu <code>date</code> z předané hodnoty <code>value</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Date.From</code> vrátí hodnotu <code>null</code>. Pokud je předaná hodnota <code>value</code> typu <code>date</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>date</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>date</code> z textové reprezentace. Další informace naleznete v popisu funkce <code>Date.FromText</code>.</li>        <li><code>datetime</code>: Komponenta data hodnoty <code>value</code>.</li>        <li><code>datetimezone</code>: Komponenta data místního ekvivalentu datetime hodnoty <code>value</code>.</li>        <li><code>number</code>: Komponenta data místního ekvivalentu datetime data OLE Automation vyjádřená hodnotou <code>value</code>.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, vrátí se chyba.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;43910&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Převede hodnotu &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
