---
title: Time.From
---

# Time.From


## Description

Vytvoří časovou hodnotu z předané hodnoty.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Vrátí hodnotu <code>time</code> z předané hodnoty <code>value</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>Time.From</code> vrátí hodnotu <code>null</code>.  Pokud je předaná hodnota <code>value</code> typu <code>time</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>time</code> jde převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>time</code> z textové reprezentace Další informace naleznete v popisu funkce <code>Time.FromText</code>.</li>        <li><code>datetime</code>: Časová komponenta hodnoty <code>value</code></li>        <li><code>datetimezone</code>: Časová komponenta místního ekvivalentu hodnoty <code>value</code></li><li><code>number</code>: Hodnota <code>time</code> odpovídající počtu zlomků dnů vyjádřených výrazem <code>value</code>. Pokud je hodnota <code>value</code> záporná nebo větší nebo rovna 1, je vrácena chyba.</li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;0.7575&lt;/code&gt; na hodnotu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Převede hodnotu &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
