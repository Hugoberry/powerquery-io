---
title: Number.From
---

# Number.From


## Description

Ustvari številsko vrednost iz dane vrednosti.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrne vrednost <code>number</code> iz navedene vrednosti <code>value</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").Če je navedena vrednost <code>value</code> <code>null</code>, <code>Number.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> <code>number</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>number</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>number</code> iz predstavitve v obliki besedila. Obravnavane so običajne oblike besedila ("15", "3,423.10", "5.0E-10"). Za podrobnosti glejte <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 za <code>true</code>, 0 za <code>false</code>.</li>           <li><code>datetime</code>: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE.</li>        <li><code>datetimezone</code>: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE za lokalni datum in čas <code>value</code>.</li>        <li><code>date</code>: število s plavajočo vejico z dvojno natančnostjo, ki vsebuje datumski ekvivalent avtomatizacije OLE.</li>        <li><code>time</code>: predstavljeno kot dnevi, izraženi z ulomki.</li>        <li><code>duration</code>: predstavljeno v celoti in kot dnevi, izraženi z ulomki.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Poiščite vrednost &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Poiščite vrednost &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Pridobite vrednost &lt;code&gt;number&lt;/code&gt; za &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
