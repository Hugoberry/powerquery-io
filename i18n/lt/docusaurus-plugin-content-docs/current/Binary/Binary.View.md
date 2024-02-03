---
title: Binary.View
---

# Binary.View


## Description

Sukuriamas arba pratęsiamas dvejetainis su vartotojo apibrėžtomis užklausų ir veiksmų operacijų apdorojimo programomis.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Pateikiamas <code>binary</code> rodinys, kur funkcijos, nurodytos <code>handlers</code>, yra naudojamos vietoj numatytųjų operacijos veiksmų, kai operacija taikoma rodiniui.<br />Jei <code>binary</code> pateikiama, visos apdorojimo programos funkcijos yra pasirinktinės. Jei <code>binary</code> nepateikiama, būtina naudoti apdorojimo programos funkciją <code>GetStream</code>. Jei apdorojimo programos funkcija operacijai nenurodyta, <code>binary</code> bus taikoma numatytoji operacijos elgsena (išskyrus <code>GetExpression</code> atvejus).<br />Apdorojimo programos funkcijos turi pateikti reikšmę, kuri semantiškai lygi rezultatui, gautam <code>binary</code> pritaikius operaciją (arba gautam rodiniui, jei naudojama <code>GetExpression</code>).<br />Jei apdorojimo funkcija pateikia klaidą, rodiniui taikoma numatytoji operacijos elgsena.<br /><code>Binary.View</code> galima naudoti norint įdiegti perėjimą į duomenų šaltinį – M užklausų vertimą į šaltiniui būdingas operacijas (pvz., kad būtų atsisiųsta failo dalis).<br />Išsamesnį <code>Binary.View</code> aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.<br />


## Examples

### Example #1 
Sukurkite bazinį rodinį, kuriam nereikia prieigos prie duomenų, kad būtų galima nustatyti ilgį.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
