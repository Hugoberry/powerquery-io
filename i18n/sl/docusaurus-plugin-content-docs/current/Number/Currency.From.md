---
title: Currency.From
---

# Currency.From


## Description

Dano vrednost pretvori v vrednost valute.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Iz dane vrednosti<code>value</code> vrne vrednost <code>currency</code>. Če je navedena vrednost <code>value</code> <code>null</code>, <code>Currency.From</code> vrne vrednost <code>null</code>. Če je navedena vrednost <code>value</code> vrste <code>number</code> v obsegu valute, bo prikazan ulomek vrednosti <code>value</code>, zaokrožen na 4 decimalna mesta. Če je navedena vrednost <code>value</code> katere koli druge vrste, bo najprej pretvorjena v <code>number</code> s pomočjo <code>Number.FromText</code>. Veljaven obseg za valuto je od <code>-922,337,203,685,477.5808</code> do <code>922,337,203,685,477.5807</code>. Glejte <code>Number.Round</code> za načine zaokroževanja, ki so na voljo. Privzeti način zaokroževanja je <code>RoundingMode.ToEven</code>. Navedete lahko tudi dodatni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Pridobite vrednost &lt;code&gt;currency&lt;/code&gt; za &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Pridobite vrednost &lt;code&gt;currency&lt;/code&gt; števila &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; z načinom zaokroževanja &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
