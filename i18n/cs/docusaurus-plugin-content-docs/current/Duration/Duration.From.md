---
title: Duration.From
---

# Duration.From


## Description

Vytvoří hodnotu duration z předané hodnoty.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Vrátí hodnotu <code>duration</code> z předané hodnoty <code>value</code>. Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Duration.From</code> vrátí hodnotu <code>null</code>.  Pokud je předaná hodnota <code>value</code> typu <code>duration</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>duration</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>duration</code> z textového formátu uplynulého času (d.h:m:s). Další informace naleznete v popisu funkce <code>Duration.FromText</code>.</li>        <li><code>number</code>: Hodnota <code>duration</code> ekvivalentní k počtu celých dnů a zlomků dnů vyjádřených hodnotou <code>value</code>.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;2.525&lt;/code&gt; na hodnotu &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
