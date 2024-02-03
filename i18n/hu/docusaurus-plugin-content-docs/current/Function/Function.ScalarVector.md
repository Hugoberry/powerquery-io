---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Skaláris függvényt ad hozzá egy vektorfüggvényhez, és több hívást egy kötegbe fűz össze.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

<code>scalarFunctionType</code> típusú skaláris függvényt ad vissza, amely a(z) <code>vectorFunction</code> függvényt hívja meg egy sornyi argumentummal, és annak egyetlen kimeneti értékét adja vissza. Emellett, ha a skaláris függvény ismételten alkalmazva van egy bemeneti tábla minden sorára (pl.: Table.AddColumn), a rendszer helyette a(z) <code>vectorFunction</code> függvényt alkalmazza egyszer minden bemenetre.<br />A(z) <code>vectorFunction</code> függvény egy olyan táblát kap, amelynek oszlopai elnevezésben és pozícióban is megegyeznek a(z) <code>scalarFunctionType</code> függvény paramétereivel. A tábla minden egyes sora a skaláris függvény egyszeri meghívásának argumentumait tartalmazza, és oszlopai megfelelnek a(z) <code>scalarFunctionType</code> függvény paramétereinek.<br />A(z) <code>vectorFunction</code> függvénynek a bemeneti táblával azonos hosszúságú listát kell visszaadnia, amelyben az elemnek minden pozícióban egyeznie kell azzal az eredménnyel, amelyet az azonos pozíciójú bemeneti sor skaláris függvényének kiértékelése ad.<br />A bemeneti táblának streameléssel kell beérkeznie, ezért a(z) <code>vectorFunction</code> függvénynek a bemenet érkezésekor streamelnie kell a kimenetet, miközben egyszerre csak egy bemenettömböt kezelhet. Különösen fontos, hogy a(z) <code>vectorFunction</code> függvény csak egyszer enumerálja a hozzá tartozó bemeneti táblát.<br />



## Category
Function
