---
title: List.Generate
---

# List.Generate


## Description

Értéklistát hoz létre.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Értéklistát hoz létre a megadott függvények használatával. A(z) <code>initial</code> függvény létrehoz egy kezdő jelöltértéket, amelyet ezután a(z) <code>condition</code> ellenében tesztel.     Ha a jelölt értéke jóvá van hagyva, akkor az eredményül kapott lista részeként lesz visszaadva, a következő jelölt érték pedig úgy jön létre, hogy a rendszer az újonnan jóváhagyott <code>next</code> értéket adja át. Amint egy jelölt értéke nem felel meg a(z) <code>condition</code> feltételének, a listalétrehozási folyamat leáll. Az eredményként kapott lista elemeinek átalakításához megadható a(z) <code>selector</code>opcionális paraméter is.


## Examples

### Example #1 
Hozzon létre egy listát úgy, hogy tíztől kezdve ismétlődően eggyel csökkenti, és gondoskodik arról, hogy minden elem nullánál nagyobb legyen.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Létrehoz egy olyan rekordlistát, amely tartalmazza x-et és y-t, ahol x egy érték, y pedig egy lista. Az x értéknek 10 alatt kell maradnia, ez az érték jelzi az y lista elemeinek számát. A lista létrehozása után a függvény csak az x értékeket adja vissza.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
