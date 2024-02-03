---
title: Time.From
---

# Time.From


## Description

Vytvorí čas z danej hodnoty.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Vráti hodnotu <code>time</code> zo zadanej hodnoty <code>value</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>Time.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>time</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>time</code>:      <ul>        <li><code>text</code>: Hodnota <code>time</code> z textového vyjadrenia. Podrobnosti nájdete v časti <code>Time.FromText</code>.</li>        <li><code>datetime</code>: Súčasť času hodnoty <code>value</code>.</li>        <li><code>datetimezone</code>: Súčasť času ekvivalentu miestneho dátumu a času hodnoty <code>value</code>.</li>        <li><code>number</code>: Ekvivalent <code>time</code> k počtu zlomkových dní vyjadrený pomocou príkazu <code>value</code>. Ak je hodnota <code>value</code> záporná, prípadne väčšia ako alebo rovná hodnote 1, vráti sa chyba.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;0.7575&lt;/code&gt; na hodnotu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertujte hodnotu &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
