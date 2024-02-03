---
title: Number.FromText
---

# Number.FromText


## Description

Számot hoz létre az általános szöveges formátumokból (&#34;15&#34;, &#34;3423,10&#34;, &#34;5,0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Egy <code>number</code> értéket ad vissza a <code>text</code> szöveges értékből. <ul>  <li><code>text</code>: Egy számérték szöveges megjelenítése. A megjelenítésnek általános számformátumban kell történnie. Például: „15”, „3,423.10”, „5.0E-10”.</li>  <li><code>culture</code>: Egy nem kötelező paraméter a kulturális környezetre vonatkozóan, amely szabályozza a <code>text</code> értelmezési módját (például, „en-US”).</li> </ul>


## Examples

### Example #1 
A &lt;code&gt;&#34;4&#34;&lt;/code&gt; számértékének előállítása
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Az &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; számértékének előállítása
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
