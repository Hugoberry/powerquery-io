---
title: Binary.View
---

# Binary.View


Sukuriamas arba pratęsiamas dvejetainis su vartotojo apibrėžtomis užklausų ir veiksmų operacijų apdorojimo programomis.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Pateikiamas `binary` rodinys, kur funkcijos, nurodytos `handlers`, yra naudojamos vietoj numatytųjų operacijos veiksmų, kai operacija taikoma rodiniui.

Jei `binary` pateikiama, visos apdorojimo programos funkcijos yra pasirinktinės. Jei `binary` nepateikiama, būtina naudoti apdorojimo programos funkciją `GetStream`. Jei apdorojimo programos funkcija operacijai nenurodyta, `binary` bus taikoma numatytoji operacijos elgsena (išskyrus `GetExpression` atvejus).

Apdorojimo programos funkcijos turi pateikti reikšmę, kuri semantiškai lygi rezultatui, gautam `binary` pritaikius operaciją (arba gautam rodiniui, jei naudojama `GetExpression`).

Jei apdorojimo funkcija pateikia klaidą, rodiniui taikoma numatytoji operacijos elgsena.

`Binary.View` galima naudoti norint įdiegti perėjimą į duomenų šaltinį – M užklausų vertimą į šaltiniui būdingas operacijas (pvz., kad būtų atsisiųsta failo dalis).

Išsamesnį `Binary.View` aprašą rasite paskelbtuose „Power Query“ tinkinamos jungties dokumentuose.


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
