---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Vytvorí údaj datetimezone z danej hodnoty.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Vráti hodnotu <code>datetimezone</code> zo zadanej hodnoty <code>value</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).Ak zadaná hodnota <code>value</code> je <code>null</code>, <code>DateTimeZone.From</code> vráti hodnotu <code>null</code>. Ak zadaná hodnota <code>value</code> je <code>datetimezone</code>, vráti sa hodnota <code>value</code>. Hodnoty nasledujúcich typov možno konvertovať na hodnotu <code>datetimezone</code>:      <ul>        <li><code>text</code>: Hodnota <code>datetimezone</code> z textového vyjadrenia. Podrobnosti nájdete v časti <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Hodnota <code>datetimezone</code> s údajom <code>value</code> ako súčasťou dátumu, <code>12:00:00 AM</code> ako súčasťou času a posunom zodpovedajúcim miestnemu časovému pásmu.</li>        <li><code>datetime</code>: Hodnota <code>datetimezone</code> s údajom <code>value</code> ako dátumom a časom a posunom zodpovedajúcim miestnemu časovému pásmu.</li>        <li><code>time</code>: Hodnota <code>datetimezone</code> s dátumovým ekvivalentom k dátumu automatizácie OLE hodnoty <code>0</code> ako súčasťou dátumu, <code>value</code> ako súčasťou času a posunom zodpovedajúcim miestnemu časovému pásmu.</li>        <li><code>number</code>: Hodnota <code>datetimezone</code> s ekvivalentom dátumu a času k dátumu automatizácie OLE vyjadrenému pomocou hodnoty <code>value</code> a posunom zodpovedajúcim miestnemu časovému pásmu.</li>      </ul>Ak je hodnota <code>value</code> akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; na hodnotu &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
