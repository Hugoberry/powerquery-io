---
title: DateTime.From
---

# DateTime.From


## Description

Vytvorí dátum a čas z danej hodnoty.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Vráti hodnotu <code>datetime</code> zo zadanej hodnoty <code>value</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>DateTime.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>datetime</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>datetime</code>:      <ul>        <li><code>text</code>: Hodnota <code>datetime</code> z textového vyjadrenia. Podrobnosti nájdete v časti <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Hodnota <code>datetime</code> s údajom <code>value</code> ako súčasťou dátumu a <code>12:00:00 AM</code> ako súčasťou času.</li>        <li><code>datetimezone</code>: Miestny ekvivalent <code>datetime</code> hodnoty <code>value</code>.</li>        <li><code>time</code>: Hodnota <code>datetime</code> s dátumovým ekvivalentom k dátumu automatizácie OLE hodnoty <code>0</code> ako súčasťou dátumu a hodnoty <code>value</code> ako súčasťou času.</li>        <li><code>number</code>: Ekvivalent <code>datetime</code> k dátumu automatizácie OLE vyjadrený pomocou funkcie <code>value</code>. </li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; na hodnotu &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertujte hodnotu &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; na hodnotu &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
