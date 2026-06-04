---
title: Table.Partition
---

# Table.Partition


Lentelė išskaidoma į lentelių sąrašą atsižvelgiant į grupių skaičių ir nurodytą stulpelį.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

`table` išskaidoma į lentelių `groups` skaičiaus sąrašą, atsižvelgiant į `column` reikšmę ir `hash` funkciją. `hash` funkcija pritaikoma `column` eilutės reikšmei, kad būtų gauta eilutės maišos reikšmė. Maišos reikšmės modulis `groups` nustato, kuriose iš pateiktų lentelių bus įdėta eilutė.

-   `table`: skaidytina lentelė.
-   `column`: stulpelis, kuriam taikyti maišos funkciją, norint nustatyti, kurioje iš pateiktų lentelių yra eilutė.
-   `groups`: skaičius lentelių, į kurias bus išskaidyta įvesties lentelė.
-   `hash`: funkcija, taikoma norint gauti maišos reikšmę.


## Examples

### Example #1
Išskaidykite lentelę `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` į 2 lenteles stulpelyje \[a\], naudodami stulpelių reikšmę kaip maišos funkciją.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
