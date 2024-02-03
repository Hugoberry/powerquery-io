---
title: DateTime.From
---

# DateTime.From


## Description

Vytvoří z dané hodnoty hodnotu datetime.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Vrátí hodnotu <code>datetime</code> z předané hodnoty <code>value</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).Pokud předaná hodnota <code>value</code> je <code>null</code>, funkce <code>DateTime.From</code> vrátí hodnotu <code>null</code>. Pokud je předaná hodnota <code>value</code> typu <code>datetime</code>, je vrácena hodnota <code>value</code>. Na hodnoty <code>datetime</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>datetime</code> z textové reprezentace. Další informace naleznete v popisu funkce <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Hodnota <code>datetime</code> s <code>value</code> jako komponentou data a <code>12:00:00 AM</code> jako komponentou času.</li>        <li><code>datetimezone</code>: Místní ekvivalent <code>datetime</code> hodnoty <code>value</code>.</li>        <li><code>time</code>: Hodnota <code>datetime</code> s ekvivalentem data OLE Automation Date z <code>0</code> jako komponentou data a <code>value</code> jako komponentou času.</li>        <li><code>number</code>: Ekvivalent <code>datetime</code> vyjádřený OLE Automation Date podle <code>value</code>. </li>      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Převést hodnotu &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;datetime&lt;/code&gt;
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Převést řetězec &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; na hodnotu &lt;code&gt;datetime&lt;/code&gt;
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
