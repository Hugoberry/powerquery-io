---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Vytvoří z dané hodnoty hodnotu datetimezone.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Vrátí hodnotu <code>datetimezone</code> z předané hodnoty <code>value</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).Pokud je předaná hodnota <code>value</code> <code>null</code>, funkce <code>DateTimeZone.From</code> vrátí hodnotu <code>null</code>. Pokud předaná hodnota <code>value</code> je typu <code>datetimezone</code>, vrátí se hodnota <code>value</code>. Na hodnoty <code>datetimezone</code> lze převést hodnoty následujících typů:      <ul>        <li><code>text</code>: Hodnota <code>datetimezone</code> z textové reprezentace. Další informace naleznete v popisu funkce <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Hodnota <code>datetimezone</code> s <code>value</code> jako komponentou data, <code>12:00:00 AM</code> jako komponentou času a posunem odpovídajícím místnímu časovému pásmu.</li>        <li><code>datetime</code>: Hodnota <code>datetimezone</code> s <code>value</code> jako datetime a posunem odpovídajícím místnímu časovému pásmu.</li>        <li><code>time</code>: Hodnota <code>datetimezone</code> s datem ekvivalentním OLE Automation Date <code>0</code> jako komponentou data, <code>value</code> jako komponentou času a posunem odpovídajícím místnímu časovému pásmu.</li>        <li><code>number</code>: Hodnota <code>datetimezone</code> s datetime ekvivalentem OLE Automation Date vyjádřeným pomocí <code>value</code> a posunem odpovídajícím místnímu časovému pásmu </li>.      </ul>Pokud je hodnota <code>value</code> jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1 
Převést řetězec &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; na hodnotu &lt;code&gt;datetimezone&lt;/code&gt;
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
