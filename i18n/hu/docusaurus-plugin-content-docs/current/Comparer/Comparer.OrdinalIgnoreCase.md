---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Nem betűérzékeny összehasonlító függvényt ad vissza, amely sorrendi szabályokat használ az értékek összehasonlítására.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Olyan, kis- és nagybetűk megkülönböztetése nélküli összehasonlító függvényt ad vissza, amely sorszámszabályok használatával hasonlítja össze a megadott <code>x</code> és <code>y</code> értékeket.<br />        <br />        Az összehasonlító függvény két argumentumot fogad el, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első érték a másodikhoz képest kisebb, egyenlő vagy nagyobb.    


## Examples

### Example #1 
Az „Abc” összehasonlítása az „abc”-vel nem betűérzékeny sorrendi szabályok használatával. Megjegyzés: a &lt;code&gt;Comparer.Ordinal&lt;/code&gt; használata esetén az „Abc” értéke kisebb, mint az „abc”. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
