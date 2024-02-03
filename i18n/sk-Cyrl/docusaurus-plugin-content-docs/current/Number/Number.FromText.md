---
title: Number.FromText
---

# Number.FromText


## Description

Vytvorí čísla z bežných formátov textu (&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Vráti hodnotu <code>number</code> z danej textovej hodnoty <code>text</code>. <ul>  <li><code>text</code>: Vráti textové vyjadrenie číselnej hodnoty. Vyjadrenie musí byť v bežnom formáte textu, ako napríklad 15, 3,423.10 alebo 5.0E-10.</li>  <li><code>culture</code>: Voliteľná jazyková verzia, ktorá určuje, ako sa <code>text</code> interpretuje (napríklad en-US).</li> </ul>


## Examples

### Example #1 
Získajte číselnú hodnotu čísla &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získajte číselnú hodnotu čísla &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
