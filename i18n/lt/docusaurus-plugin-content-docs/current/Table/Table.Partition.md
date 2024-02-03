---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

<code>table</code> išskaidoma į lentelių <code>groups</code> skaičiaus sąrašą, atsižvelgiant į <code>column</code> reikšmę ir <code>hash</code> funkciją.    <code>hash</code> funkcija pritaikoma <code>column</code> eilutės reikšmei, kad būtų gauta eilutės maišos reikšmė. Maišos reikšmės modulis <code>groups</code> nustato, kuriose iš pateiktų lentelių bus įdėta eilutė.    <ul>       <li><code>table</code>: skaidytina lentelė.</li>       <li><code>column</code>: stulpelis, kuriam taikyti maišos funkciją, norint nustatyti, kurioje iš pateiktų lentelių yra eilutė.</li>       <li><code>groups</code>: skaičius lentelių, į kurias bus išskaidyta įvesties lentelė.</li>       <li><code>hash</code>: funkcija, taikoma norint gauti maišos reikšmę.</li>    </ul>  


## Examples

### Example #1 
Išskaidykite lentelę &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; į 2 lenteles stulpelyje [a], naudodami stulpelių reikšmę kaip maišos funkciją.
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
