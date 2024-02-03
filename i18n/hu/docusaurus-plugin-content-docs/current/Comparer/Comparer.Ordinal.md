---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Az értékeket sorszámszabályokkal összevető összehasonlító függvény visszaadása.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Olyan összehasonlító függvényt ad vissza, amely sorszámszabályok használatával hasonlítja össze a megadott <code>x</code> és <code>y</code> értékeket.<br />        <br />        Az összehasonlító függvény két argumentumot fogad el, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első érték a másodikhoz képest kisebb, egyenlő vagy nagyobb.    


## Examples

### Example #1 
Az „encyclopædia” és az „encyclopaedia” szó egyezőségének vizsgálata a karakterek sorszáma alapján. A művelet ekvivalens a &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; művelettel. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
