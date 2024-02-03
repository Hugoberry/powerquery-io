---
title: Comparer.Equals
---

# Comparer.Equals


## Description

A két megadott érték egyenlőségének ellenőrzésén alapuló logikai érték visszaadása.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Egy <code>logikai</code> értéket ad vissza a két megadott érték (<code>x</code> és <code>y</code>) egyenlőségvizsgálata alapján a megadott <code>comparer</code> használatával.      <div>        A(z) <code>comparer</code> egy <code>összehasonlító</code>, amely az összehasonlítást szabályozza.        Az összehasonlító olyan függvény, amely két argumentumot vár, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első megadott érték a másodikhoz képest kisebb, azzal egyenlő vagy nagyobb.        Az összehasonlítók a kis- és nagybetűket meg nem különböztető, illetve kulturális környezetet és területi beállítást figyelembe vevő összehasonlítások megadására használhatók.      </div>      <div>        A következő beépített összehasonlítók érhetők el a képletnyelvben:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li> <code>Comparer.FromCulture</code>: Kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál</li>      </ul>


## Examples

### Example #1 
Az „1” és az „A” érték egyenlőségvizsgálata az „en-US” nyelv szerint.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
