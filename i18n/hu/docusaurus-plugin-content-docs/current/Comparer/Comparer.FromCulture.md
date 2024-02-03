---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Egy összehasonlító függvényt ad vissza a megadott kulturális környezet és a kis- és nagybetűk megkülönböztetése alapján.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Egy olyan összehasonlító függvényt ad vissza, amely a(z) <code>culture</code> és a(z) <code>ignoreCase</code> által megadott kis- és nagybetűk közötti megkülönböztetést használja összehasonlítások végrehajtásához.<br />      <br />      Az összehasonlító függvény két argumentumot fogad el, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első érték a másodikhoz képest kisebb, egyenlő vagy nagyobb.<br />      <br />      A(z) <code>ignoreCase</code> alapértelmezett értéke hamis. A(z) <code>culture</code> értékének a .NET-keretrendszer által támogatott területi beállítások egyikének kell lennie (például „en-US”).    


## Examples

### Example #1 
Az „a” és az „A” érték egyenlőségvizsgálata az „en-US” nyelv szabályai szerint.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Az „a” és az „A” érték kis- és nagybetűket azonosnak tekintő egyenlőségvizsgálata az „en-US” nyelv szabályai szerint.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
