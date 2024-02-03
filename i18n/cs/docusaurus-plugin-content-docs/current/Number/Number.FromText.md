---
title: Number.FromText
---

# Number.FromText


## Description

Vytvoří čísla z běžných textových formátů (15, 3 423,10, 5,0E-10).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu <code>čísla</code> z dané textové hodnoty <code>text</code>. <ul>  <li><code>text</code>: Textová reprezentace číselné hodnoty. Reprezentace musí být v běžném číselném formátu, třeba 15, 5,0E-10 nebo 3423,10.</li> <li><code>culture</code>: Nepovinná jazyková verze, která určuje, jak se <code>text</code> interpretuje (např. en-US)</li> </ul>


## Examples

### Example #1 
Získá hodnotu number hodnoty &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Získá číselnou hodnotu hodnoty &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
